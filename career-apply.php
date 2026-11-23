<?php
header('Content-Type: application/json; charset=UTF-8');
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}
if (!empty($_POST['website_url'])) {
    echo json_encode(['success' => true, 'message' => 'Application received.']);
    exit;
}
$name     = trim(strip_tags($_POST['name'] ?? ''));
$email    = filter_var(trim($_POST['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$phone    = trim(strip_tags($_POST['phone'] ?? ''));
$position = trim(strip_tags($_POST['position'] ?? 'General Application'));

if (!$name || !$email || !$phone) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please fill in your name, valid email, and phone number.']);
    exit;
}

$resume_note = 'No file attached.';
if (isset($_FILES['resume']) && $_FILES['resume']['error'] === UPLOAD_ERR_OK) {
    $allowed = ['pdf', 'doc', 'docx'];
    $ext = strtolower(pathinfo($_FILES['resume']['name'], PATHINFO_EXTENSION));
    if (!in_array($ext, $allowed, true) || $_FILES['resume']['size'] > 5 * 1024 * 1024) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Resume must be PDF/DOC/DOCX under 5MB.']);
        exit;
    }
    $resume_note = 'Resume uploaded: ' . basename($_FILES['resume']['name']);
}

$to      = 'sales@fablabindia.com';
$subject = "Career Application: {$position} — {$name}";
$body    = "New job application received via fablabindia.com:\n\n"
         . "Position: {$position}\nName: {$name}\nEmail: {$email}\nPhone: {$phone}\n{$resume_note}\n";
$headers = "From: Fablab Careers <no-reply@fablabindia.com>\r\nReply-To: {$email}\r\n";

if (@mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Thank you! Your application has been submitted to our HR team.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Server mail delivery failed. Please email your resume to sales@fablabindia.com.']);
}
