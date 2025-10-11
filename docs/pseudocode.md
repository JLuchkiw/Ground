START PROGRAM
    PRINT welcome message
    PRINT "Are you in a safe space where you can take a moment? (Y/N)"

LOOP:
    GET user_input
    CONVERT input to uppercase and strip whitespace
    IF input == 'Y':
        BREAK loop and continue program
    ELSE IF input == 'N':
        PRINT safety resources:
            - Call 911 for emergencies
            - Call 988 if feeling hopeless or at risk
            - Reach out to a trusted friend
        EXIT program
    ELSE:
        PRINT "Please enter Y for yes or N for no"
        
    PRINT brief explanation of grounding technique

    DEFINE grounding_steps AS LIST OF TUPLES:
        (5, "things you can see", optional_prompt_for_sense)
        (4, "things you can touch", optional_prompt_for_sense)
        (3, "things you can hear", optional_prompt_for_sense)
        (2, "things you can smell", optional_prompt_for_sense)
        (1, "thing you can taste", optional_prompt_for_sense)

    FOR EACH step IN grounding_steps:
        PRINT step number and sense
        PROMPT user with optional interactive question
        WAIT for user input (press Enter)
        OPTIONAL: store user's responses in a temporary log

    PRINT completion message
    OPTIONAL: offer to repeat exercise or exit

END PROGRAM