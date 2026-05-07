# CodeSpark Backend

Django backend for CodeSpark enrollment system.

## Setup

1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

2. Configure email settings in `codespark/settings.py`:
   - Replace `EMAIL_HOST_USER` with your Gmail address
   - Replace `EMAIL_HOST_PASSWORD` with your Gmail app password
   - Replace `DEFAULT_FROM_EMAIL` with your Gmail address
   - Update `recipient_email` in `student/views.py` with the email where you want to receive enrollment notifications

3. Run migrations:
   ```bash
   python manage.py migrate
   ```

4. Run the server:
   ```bash
   python manage.py runserver
   ```

## API Endpoints

- `GET /api/students/` - List all students
- `POST /api/enroll/` - Enroll a new student

### Enrollment POST Data
- `name`: Student name
- `email`: Student email
- `phone`: Student phone number
- `course`: Selected course

## Email Configuration

To enable email notifications:

1. Enable 2-factor authentication on your Gmail account
2. Generate an app password: https://support.google.com/accounts/answer/185833
3. Use the app password in `EMAIL_HOST_PASSWORD`

The enrollment data will be sent to the email specified in the `enroll_student` view.