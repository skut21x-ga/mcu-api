# Marvel Cinematic University (MCU) API

<div class="app-desc">This is a Marvel Cinematic Universe (MCU) API server that provides information on character's in [Marvel](https://www.marvel.com)'s movies and tv shows. For this API, there is no auth key needed. I utilized a [CSV to JSON converter](https://csvjson.com/csv2json) to convert data from a [Kaggle dataset](https://www.kaggle.com/apriandito/mcu-characters) which sourced from a dataset at [Kamis Data Program Indonesia](https://github.com/indo-r/kamisdata). All characters are owned and copywrite by [Marvel](https://www.marvel.com). This API documentation was written via Swagger at [http://swagger.io](http://swagger.io).</div>

<div class="app-desc">More information: [https://helloreverb.com](https://helloreverb.com)</div>

<div class="app-desc">Contact Info: [scott.kutler@gmail.com](scott.kutler@gmail.com)</div>

<div class="app-desc">Version: 1.0.0</div>

<div class="app-desc">BasePath:</div>

<div class="license-info">Scott Kutler GitHub Repo</div>

<div class="license-url">http://www.github.com/skut21x-ga</div>

## Access ## <a name="__Methods">Methods</a> [ Jump to [Models](#__Models) ] ### Table of Contents #### [](#) _ [`<span class="http-method">get</span> /`](#rootGet) _ [`<span class="http-method">post</span> /`](#rootPost) #### [Affiliation](#Affiliation) _ [`<span class="http-method">get</span> /affiliation/:affiliation`](#affiliationaffiliationGet) #### [Category](#Category) _ [`<span class="http-method">get</span> /category/:category`](#categorycategoryGet) #### [Name](#Name) _ [`<span class="http-method">delete</span> /name/:name`](#namenameDelete) _ [`<span class="http-method">get</span> /name/:name`](#namenameGet) _ [`<span class="http-method">put</span> /name/:name`](#namenamePut) #### [Species](#Species) _ [`<span class="http-method">get</span> /species/:species`](#speciesspeciesGet) #<a name=""></a>

<div class="method"><a name="rootGet"></a>

<div class="method-path"><a name="rootGet"></a>[Up](#__Methods) get /</div>

<div class="method-summary">View all characters in database (<span class="nickname">rootGet</span>)</div>

<div class="method-notes">ie. GET '/' to see all characters</div>

### Responses #### 200 successful operation[](#) #### 400 failed operation[](#)</div>

---

<div class="method"><a name="rootPost"></a>

<div class="method-path"><a name="rootPost"></a>[Up](#__Methods) post /</div>

<div class="method-summary">Post new character(s) to database (<span class="nickname">rootPost</span>)</div>

<div class="method-notes">Raw JSON input can be entered into the body to post to the db a new character</div>

### Responses #### 200 successful operation[](#) #### 400 failed operation[](#)</div>

- - - # <a name="Affiliation">Affiliation</a>

<div class="method"><a name="affiliationaffiliationGet"></a>

<div class="method-path"><a name="affiliationaffiliationGet"></a>[Up](#__Methods) get /affiliation/:affiliation</div>

<div class="method-summary">View all characters based on their affiliation (<span class="nickname">affiliationaffiliationGet</span>)</div>

<div class="method-notes">ie. GET '/affiliation/HYDRA' to view characters with HYDRA affiliation</div>

### Query parameters

<div class="field-items">

<div class="param">affiliation (optional)</div>

<div class="param-desc"><span class="param-type">Query Parameter</span> — The character's specific affiliation</div>

</div>

### Responses #### 200 successful operation[](#) #### 400 Invalid tag value[](#)</div>

- - - # <a name="Category">Category</a>

<div class="method"><a name="categorycategoryGet"></a>

<div class="method-path"><a name="categorycategoryGet"></a>[Up](#__Methods) get /category/:category</div>

<div class="method-summary">View all characters based on their 'Hero' or 'Villain' status (<span class="nickname">categorycategoryGet</span>)</div>

<div class="method-notes">ie. GET '/category/Hero' to see all heroes</div>

### Query parameters

<div class="field-items">

<div class="param">category (optional)</div>

<div class="param-desc"><span class="param-type">Query Parameter</span> — The character's Hero or Villain category</div>

</div>

### Responses #### 200 successful operation[](#) #### 400 Invalid tag value[](#)</div>

- - - # <a name="Name">Name</a>

<div class="method"><a name="namenameDelete"></a>

<div class="method-path"><a name="namenameDelete"></a>[Up](#__Methods) delete /name/:name</div>

<div class="method-summary">Delete an existing character via name (<span class="nickname">namenameDelete</span>)</div>

<div class="method-notes">ie. DELETE to '/name/Jensen' will delete Jensen's entry.</div>

### Query parameters

<div class="field-items">

<div class="param">name (optional)</div>

<div class="param-desc"><span class="param-type">Query Parameter</span> — Character's name that needs to be searched for and deleted.</div>

</div>

### Responses #### 200 successful operation[](#) #### 400 Invalid tag value[](#)</div>

---

<div class="method"><a name="namenameGet"></a>

<div class="method-path"><a name="namenameGet"></a>[Up](#__Methods) get /name/:name</div>

<div class="method-summary">Search for character by their full name (<span class="nickname">namenameGet</span>)</div>

<div class="method-notes">ie. GET '/name/Jensen' to see Jenson's entry</div>

### Query parameters

<div class="field-items">

<div class="param">name (optional)</div>

<div class="param-desc"><span class="param-type">Query Parameter</span> — The character's full name</div>

</div>

### Responses #### 200 successful operation[](#) #### 400 Invalid tag value[](#)</div>

---

<div class="method"><a name="namenamePut"></a>

<div class="method-path"><a name="namenamePut"></a>[Up](#__Methods) put /name/:name</div>

<div class="method-summary">Update an existing character via name (<span class="nickname">namenamePut</span>)</div>

<div class="method-notes">ie. PUT to '/name/Jensen' will update Jensen's entry.</div>

### Query parameters

<div class="field-items">

<div class="param">name (optional)</div>

<div class="param-desc"><span class="param-type">Query Parameter</span> — Character's name that needs to be searched for and edited.</div>

</div>

### Responses #### 200 successful operation[](#) #### 400 Invalid tag value[](#)</div>

- - - # <a name="Species">Species</a>

<div class="method"><a name="speciesspeciesGet"></a>

<div class="method-path"><a name="speciesspeciesGet"></a>[Up](#__Methods) get /species/:species</div>

<div class="method-summary">View all characters based on their species (<span class="nickname">speciesspeciesGet</span>)</div>

<div class="method-notes">ie. GET '/species/Human' to view all humans in db</div>

### Query parameters

<div class="field-items">

<div class="param">species (optional)</div>

<div class="param-desc"><span class="param-type">Query Parameter</span> — The character's specific species</div>

</div>

### Responses #### 200 successful operation[](#) #### 400 Invalid tag value[](#)</div>

- - - ## <a name="__Models">Models</a> [ Jump to [Methods](#__Methods) ] ### Table of Contents 1\. [`Character Model` -](#Character Model)

<div class="model">### <a name="Character Model">`Character Model` -</a> [Up](#__Models)

<div class="field-items">

<div class="param">category (optional)</div>

<div class="param-desc"><span class="param-type">[String](#string)</span></div>

<div class="param">real_name (optional)</div>

<div class="param-desc"><span class="param-type">[String](#string)</span></div>

<div class="param">alias (optional)</div>

<div class="param-desc"><span class="param-type">[String](#string)</span></div>

<div class="param">title (optional)</div>

<div class="param-desc"><span class="param-type">[String](#string)</span></div>

<div class="param">affiliation (optional)</div>

<div class="param-desc"><span class="param-type">[String](#string)</span></div>

<div class="param">citizenship (optional)</div>

<div class="param-desc"><span class="param-type">[String](#string)</span></div>

<div class="param">date_of_birth (optional)</div>

<div class="param-desc"><span class="param-type">[String](#string)</span></div>

<div class="param">date_of_death (optional)</div>

<div class="param-desc"><span class="param-type">[String](#string)</span></div>

<div class="param">species (optional)</div>

<div class="param-desc"><span class="param-type">[String](#string)</span></div>

<div class="param">gender (optional)</div>

<div class="param-desc"><span class="param-type">[String](#string)</span></div>

<div class="param">status (optional)</div>

<div class="param-desc"><span class="param-type">[String](#string)</span></div>

<div class="param">clearance (optional)</div>

<div class="param-desc"><span class="param-type">[String](#string)</span></div>

<div class="param">comic (optional)</div>

<div class="param-desc"><span class="param-type">[String](#string)</span></div>

<div class="param">game (optional)</div>

<div class="param-desc"><span class="param-type">[String](#string)</span></div>

<div class="param">movie (optional)</div>

<div class="param-desc"><span class="param-type">[String](#string)</span></div>

<div class="param">one_shot (optional)</div>

<div class="param-desc"><span class="param-type">[String](#string)</span></div>

<div class="param">portrayed_by (optional)</div>

<div class="param-desc"><span class="param-type">[String](#string)</span></div>

<div class="param">ser_no (optional)</div>

<div class="param-desc"><span class="param-type">[String](#string)</span></div>

<div class="param">tv_series (optional)</div>

<div class="param-desc"><span class="param-type">[String](#string)</span></div>

<div class="param">voiced_by (optional)</div>

<div class="param-desc"><span class="param-type">[String](#string)</span></div>

<div class="param">web_series (optional)</div>

<div class="param-desc"><span class="param-type">[String](#string)</span></div>

</div>

</div>
