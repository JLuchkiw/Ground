'''
Ground - MVP Console Version
Author: Ellie Luchkiw
Date: 2025-10-10

Description:
This console-based MVP walks the user through the 5-4-3-2-1 grounding technique.
Each step prompts the user with reflective questions to help them stay present.
'''
import sys

def safety_check():
    '''Checks if user is in a safe place to continue with the grounding exercise. Exits program and prints resources if not.'''
    while True:
        user_input = input('Before we begin, are you in a safe space where you can take a moment? (Y/N)').strip().upper()
        if user_input == 'Y':
            print('\nGreat! Let\'s continue.\n')
            break
        elif user_input == 'N':
            print("\nPlease prioritize your safety first.")
            print("📞 Call 911 for emergencies.")
            print("📞 Call 988 if you feel hopeless or at risk of harming yourself.")
            print("💬 Reach out to a trusted friend or family member.\n")
            print("Exiting the program. Take care of yourself. 🌿")
            sys.exit()
        else:
            print('Invalid input. Please enter Y for yes or N for no.\n')


def main():
    print('Welcome to Ground.')
    safety_check()
    print('Now that you\'re safe, let\'s get grounded!')
   
    grounding_steps = [
        ('5', 'things you can see', 'Can you find something around you that is a color you like? What color is it?'),
        ('4', 'things you can touch', 'Can you reach out and touch something soft or textured? What does it feel like?'),
        ('3', 'things you can hear', 'Can you notice any distant sounds? Maybe something rhythmic or natural?'),
        ('2', 'things you can smell', 'Is there a scent nearby: coffee, air freshener, fabric, anything pleasant?'),
        ('1', 'thing you can taste', 'Can you take a sip of water or notice the lingering taste in your mouth?')
    ]

    for num, sense, prompt in grounding_steps:
        print(f'\n{num} {sense.upper()}')
        input(prompt + ' (Press Enter when ready.)')

    print('\nNice work! You\'ve completed the grounding exercise.')
    print('Take a deep breath: you\'re here, now, and grounded.')

if __name__ == '__main__':
    main()