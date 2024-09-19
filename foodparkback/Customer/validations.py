import re
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _

def validate_email(data):
    """
    Validates if the email provided is valid.
    """
    email = data.get('email')
    if not email:
        raise ValidationError(_("Email is required."))
    
    # Simple email validation pattern
    email_regex = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
    if not re.match(email_regex, email):
        raise ValidationError(_("Enter a valid email address."))
    
    return email

def validate_password(data):
    """
    Validates password strength.
    """
    password = data.get('password')
    if not password:
        raise ValidationError(_("Password is required."))
    
    if len(password) < 8:
        raise ValidationError(_("Password must be at least 8 characters long."))
    
    if not any(char.isdigit() for char in password):
        raise ValidationError(_("Password must contain at least one number."))
    
    if not any(char.isupper() for char in password):
        raise ValidationError(_("Password must contain at least one uppercase letter."))
    
    if not any(char.islower() for char in password):
        raise ValidationError(_("Password must contain at least one lowercase letter."))
    
    if not any(char in '!@#$%^&*()_+-=' for char in password):
        raise ValidationError(_("Password must contain at least one special character (!@#$%^&*()_+-=)."))
    
    return password

def custom_validation(data):
    """
    Custom validation for the entire user registration data.
    """
    # Validate email
    email = validate_email(data)
    
    # Validate password
    password = validate_password(data)

    # Add other field validations as necessary
    username = data.get('username')
    if not username:
        raise ValidationError(_("Username is required."))
    if len(username) < 3:
        raise ValidationError(_("Username must be at least 3 characters long."))

    return data
