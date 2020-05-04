# project-finalproject-tim-jonas

![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) `Feedback on page layouts`


![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) `1) White text would be easier to read against that darker blue color than black text. And the bits of yellow and green text seem out of place. I think the color scheme would work better with just white and black for the text colors.`


![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) `2) The text on the users page is oddly large, and this information would be more naturally formatted as a table anyway.`


![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) `3) In the navbar, where it says "Questions", maybe it would be clearer for it to say "Quizzes"?`


![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) 4) `On the quiz page, it would be nice to have active-link highlighting in the People menu.`


Feedback on user interfaces


1) On the login and new-account forms, the inputs seem much wider than they need to be.

2) I think it would be clearer for new users if you put the new-account form right on the home page, so they don't have to try to log in before finding it.

3) On the edit-question form, the user_id input shouldn't be included, since we shouldn't be able to change the owner of a question.

![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) 4) `4) On the quiz page, a radio group might be better than a select, so that we can see all the options but none are selected by default.`

Feedback on code organization

![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) `1)  When I log in as one person, log out, then log in as another person, I'm still looking at the home page for the first person. I think it's because after logout you have the page redirecting "back", when it should really redirect to the home page.`

2) In the PUT and DELETE routes, the parameter you're calling user_id isn't really a user ID.

3) When you create a question, instead of providing the user_id on the client side, fill in that information on the server side (using the session). Otherwise it's possible for a malicious user to create a question for someone else.

Suggestions for phase three

1) Currently, a user can register with a duplicate username. The simplest fix would be to change the user_id field in your User schema to _id. (MongoDB requires object IDs to be unique, so it will throw an error if someone tries to register with a duplicate ID.)



2) For data integrity, some of the fields in your schemas should be required (you can decide which ones) and all strings should be trimmed and length-limited.



3) You'll want to make sure the server responds appropriately to the errors that occur when users try to create duplicate IDs or otherwise violate the schema validators.



4) When we're updating questions, it would be nice to see when we have unsaved changes, and to get confirmation when saves go through.



5) For security, most of your routes should only be available to users who are logged in. And some routes need further server-side checks to prevent shenanigans. For example:

I can currently type /questions/users/jpeek into my browser and edit Jonas's questions, even if I'm logged in as someone other than jpeek.
Even after you remove the user_id input from the edit form, a malicious user could just add one through the console.
