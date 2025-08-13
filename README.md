# user-search

An implementation of the below coding challenge, done for the purposes of getting familiar with Vite and CSS Modules.

---

1. Fetch data from the [Random User Generator API](https://randomuser.me/), using `https://randomuser.me/api/?results=50`. The response will look like this (truncated to show one result and only the fields we care about for this exercise):

   ```json
   {
     "results": [
       {
         "name": {
           "first": "Jennie",
           "last": "Nichols"
         },
         "location": {
           "country": "United States"
         },
         "email": "jennie.nichols@example.com",
         "dob": {
           "date": "1992-03-08T15:13:16.688Z"
         },
         "phone": "(272) 790-0888",
         "picture": {
           "large": "https://randomuser.me/api/portraits/men/75.jpg",
           "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
           "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
         },
         "login": {
           "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
           "username": "yellowpeacock117"
         },
         "id": {
           "name": "SSN",
           "value": "XXX-XX-XXXX"
         }
       }
     ]
   }
   ```

2. Take this data and render a list of people, with the list in alphabetical order by last name. Each item should show the following values:

   - full name
   - photo
   - country
   - birthday (formatted `m/d/yyyy`)
   - email (linked)
   - phone

3. Each person should be rendered in cards that look something like these:

   ![examples, two people](./public/_____cc_1.png)

4. Once you have a list, add the following filters, below the heading and above the list:

   - "Search for people": typing performs a search against first & last names.
   - "Filter by country": options should include "All," followed by an alphabetical list of countries that exist in the API response.

5. Once these filters are working, add a mechanism to sort the list by the following parameters:

   - Last name, ascending (A to Z)
   - Last name, descending (Z to A)
   - Birthday, ascending (oldest to youngest)
   - Birthday, descending (youngest to oldest)

6. At this point you should have something that may look like this, but with more people (if you use a different mechanism for sorting, that's totally fine):

   ![completed project](./public/_____cc_2.png)

7. Add a way to add, update, and remove a note for any person in the list. (Because the API is _random_, feel free to store these in application state; if the page has to reload, it's OK to lose any notes as there is no guarantee that you'll have the same identifiers for the people you receive from a request.) A few visual examples:
   - Initial state with no notes:
     ![card with 'add note' button](./public/_____cc_3.png)
   - The form (if a note already exists, the label should read "Edit note"):
     ![the open form, with a labeled input and submit and cancel buttons](./public/_____cc_4.png)
   - Cards with notes attached:
     ![multiple rendered notes, with a heading and edit and delete buttons](./public/_____cc_5.png)

---
