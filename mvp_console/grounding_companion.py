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

grounding_steps = [
    {
        'number': 5, 
        'sense': 'things you can SEE', 
        'prompt': [
            'Can you find something around you that is a color you like? What color is it?',
            'Can you find another item that is the same color?',
            'What is something else that stands out as colorful?',
            'Find something that looks textured.',
            'Notice something small that you would usually overlook.'
        ]
    },
    {
        'number': 4, 
        'sense': 'things you can TOUCH', 
        'prompt': [
            'Can you reach out and touch something soft or textured? What does it feel like?',
            'Can you find something warm or cool to the touch?',
            'Touch your shirt with your fingertips and note as many descriptions as you can.',
            'Touch your fingertips to the palm of your other hand. Make note of what you feel together and separately in your fingers and palm.'
        ]
    },
    {
        'number': 3, 
        'sense': 'things you can HEAR', 
        'prompt': [
            'Can you notice any distant sounds? Maybe something rhythmic or natural?',
            'Can you hear any voices or animal noises?',
            'How about a fan, ac, or breeze if you\'re outdoors?'
        ]
    },
    {
        'number': 2, 
        'sense': 'things you can SMELL', 
        'prompt': [
            'Is there a scent nearby: coffee, air freshener, fabric, anything pleasant?',
            'Can you notice any background smells that you usually ignore?'
        ]
    },
    {
        'number': 1,
        'sense': 'thing you can TASTE',
        'prompt': [
            'Can you take a sip of water or notice the lingering taste in your mouth from a recent snack or drink?'
        ]
    }
]

def grounding_exercise():
    print('Now that you\'re safe, let\'s get grounded!')
   
    for step in grounding_steps:
        print(f'\nFind {step['number']} {step['sense']}')
        for prompt in step['prompt']:
            input(f'{prompt} (Press Enter when ready.)')

    print('\nNice work! You\'ve completed the grounding exercise.')
    print('Take a deep breath: you\'re here, now, and grounded.')

def main():
    print('Welcome to Ground.')
    safety_check()
    grounding_exercise()
    

if __name__ == '__main__':
    main()