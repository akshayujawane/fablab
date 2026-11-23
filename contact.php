<?php
header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

// Anti-spam honeypot check
if (!empty($_POST['website_url'])) {
    echo json_encode(['success' => true, 'message' => 'Thank you for your inquiry.']);
    exit;
}

function clean_input($key) {
    return isset($_POST[$key]) ? trim(strip_tags($_POST[$key])) : '';
}

$name          = clean_input('name');
$company       = clean_input('company');
$email         = filter_var(clean_input('email'), FILTER_VALIDATE_EMAIL);
$phone         = clean_input('phone');
$role          = clean_input('role');
$service_scope = clean_input('service_scope');
$sector        = clean_input('sector');
$remark        = clean_input('remark');

if (!$name || !$company || !$email || !$phone) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please complete all required fields with a valid email address.']);
    exit;
}

$to      = 'sales@fablabindia.com';
$subject = "New Website Inquiry from {$name} ({$company})";
$body    = "New inquiry received via fablabindia.com:\n\n"
         . "Name: {$name}\n"
         . "Company: {$company}\n"
         . "Email: {$email}\n"
         . "Phone: {$phone}\n"
         . "Reaching Out As: {$role}\n"
         . "Service Scope: {$service_scope}\n"
         . "Sector: {$sector}\n"
         . "Remark:\n{$remark}\n";

$headers = "From: Fablab Website <no-reply@fablabindia.com>\r\n"
         . "Reply-To: {$email}\r\n"
         . "X-Mailer: PHP/" . phpversion();

if (@mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Thank you! Your inquiry has been sent to our sales team.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Server mail delivery failed. Please email sales@fablabindia.com directly.']);
}
