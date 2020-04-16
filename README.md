# Marvel Cinematic Universe (MCU) API

##### This is a Marvel Cinematic Universe (MCU) API server that provides information on character's in Marvel's (https://www.marvel.com) movies and tv shows. For this API, there is no auth key needed. Swagger Documentation is available in the root directory in JSON format and as index.html

##

#### How to Run:

1. Run 'npm install' in root folder
2. Run "node seed.js" in lib/db folder
3. Run "node index.js" in lib folder
   (this will start the server listening on port 3000)

#

#### API Utilizes:

- Mongoose
- Node-Fetch
- Body-Parser
- Express

#

#### Routes Utilized:

- GET ("/") for all character entries in the MCU DB
  - ie. GET "http://localhost:3000/"
  #
- GET ("/name/:real_name") to search by Full Name
  - ie. GET "http://localhost:3000/name/Jensen" to see Jenson's entry
  #
- GET ("/category/:category" to search by category
  - ie. GET "http://localhost:3000/category/Hero" to see all heroes
  #
- GET ("/species/:species" to search by species
  - ie. http://localhost:3000/species/Human" to see all humans
  #
- GET ("/affiliation/:affiliation" to search by affiliation
  ie. http://localhost:3000/affiliation/HYDRA" to see all members of HYDRA affiliation

#

- POST ("/") to create a new character in db

  - For example, the following example code can go into Body as RAW input (JSON Format) for a POST to "http://localhost:3000/".

```   
 {"category": "Hero",
       "real_name": "Scott Kutler",
       "alias": "Super Scott",
       "species": "Human",
       "affiliation": "S.H.I.E.L.D."}
```

#

- PUT ("/name/:name") to search for a character by full name and edit that character ()
  - For example, PUT to "http://localhost:3000/name/Jensen" the following code (in Body as RAW input (JSON Format) will update Jensen's entry.

```
 {   "alias": "Super Jensen",
       "species": "Inhuman"     }
```

#

- DELETE ("/name/:name") to search for a character by full name and delete that character
  - For example, send DELETE to "http://localhost:3000/name/Jensen" will delete Jensen's entry

#

#### Available Parameters:

- Real Name (ie. "Stephen Vincent Strange", "Jensen")
- Category (ie "Hero", "Villain"),
- Species (ie. "Human", "Inhuman"),
- Affiliation (ie. "S.H.I.E.L.D.", "HYDRA")

#

#### Resources Used

##### Kaggle's MCU Characters CSV from: https://www.kaggle.com/apriandito/mcu-characters

##### Original dataset from Kamis Data Program - R Indonesia: https://github.com/indo-r/kamisdata. All characters are owned and copywrite by Marvel.

##### Utilized a CSV to JSON converter to convert to JSON from the Kaggle CSV dataset: https://csvjson.com/csv2json

##### Utilized Swagger to create Swagger JSON & YAML (http://swagger.io/)
