## Proposed Components

In this app, I learnt to use React with React Router DOM alongside tests with React Testing Library.
After further reading, I believe that context API could have been used in shopping cart component from App Component, 
and it would have prevented props drilling, which occured frequqently in this project.

I was able to write and pass tests for small components; however, for larger componenets, I had to rely on
toMatchSnapshot methods.

App
-----Nav
-----Home
-----Products
----------Product Container
----------Product card
----------Cart
-------------Header
-------------Cart Container
---------------Cart Card
---------------Checkout