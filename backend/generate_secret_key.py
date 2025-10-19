#!/usr/bin/env python3
"""
Generate a secure SECRET_KEY for production use
Run this script to generate a new SECRET_KEY for your .env file
"""

import secrets
import string

def generate_secret_key(length: int = 64) -> str:
    """Generate a cryptographically secure secret key"""
    alphabet = string.ascii_letters + string.digits + "!@#$%^&*()_+-=[]{}|;:,.<>?"
    return ''.join(secrets.choice(alphabet) for _ in range(length))

def main():
    """Generate and display a new SECRET_KEY"""
    print("🔐 Generating secure SECRET_KEY for Wiseman Psychedelics API")
    print("=" * 60)
    
    # Generate multiple options
    keys = []
    for i in range(3):
        key = generate_secret_key(64)
        keys.append(key)
        print(f"\nOption {i+1}:")
        print(f"SECRET_KEY={key}")
    
    print("\n" + "=" * 60)
    print("📋 Instructions:")
    print("1. Copy one of the SECRET_KEY values above")
    print("2. Add it to your .env file:")
    print("   SECRET_KEY=your-generated-key-here")
    print("3. Make sure .env is in your .gitignore file")
    print("4. Never commit SECRET_KEY to version control!")
    
    print("\n⚠️  Security Notes:")
    print("- Use a different SECRET_KEY for each environment")
    print("- Keep your SECRET_KEY secret and secure")
    print("- If compromised, generate a new one immediately")
    print("- Minimum recommended length: 32 characters")
    print("- This script generates 64-character keys for extra security")

if __name__ == "__main__":
    main()
