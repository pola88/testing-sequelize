1) Create the database and tables on postgres. See file: db/createDatabase.sql

2) Install packages:


    $ npm install


3) run tests:

    $ jasmine-node spec/

You will see that the tests finish but the app is still waiting the last query.
I use pgAdmin3 to see the server status on postgres.
