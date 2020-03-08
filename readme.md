# Full Stack Challenge (Back)!

This repo is challenge for be Full Stack Developer. 

## How to start project
* $ `git clone git@github.com:jedsada-jed/fullstack-challenge-back.git`
* $  `cd fullstack-challenge-back`
* $ `npm install`
* $ `npx sequelize-cli db:migrate`
* $ `npx sequelize-cli db:seed:all`
* $ `npm run dev`

## Auth

### Login
* Path: `/auth/login`
* Method: `Post`
* Body and example

|Field|Type|
|-|-|
|email|text|
|password|text|

```
{
	"email": "jedsada@mail.com",
	"password": "123456"
}
```
* Response
```
{
	"token": "text-token"
}
```

## Admin

### List data admin
* Path: `/admin`
* Method: `Get`
* Required header `Authorization` (Have to login for get token )
* Response 
```
[
    {
        "id": 1,
        "firstName": "Jed",
        "lastName": "Ng",
        "email": "jed@mail.com",
        "createdAt": "2020-03-08T11:23:37.755Z",
        "updatedAt": "2020-03-08T11:23:37.755Z"
    }
]
```


## Product

### List data product
* Path: `/product`
* Method: `Get`
* Required header `Authorization` (Have to login for get token )
* Response 
```
[
	{
		"id":  1,
		"title":  "Mascara",
		"description":  "Mascara is a cosmetic commonly used to enhance the eyelashes",
		"price":  3990,
		"createdAt":  "2020-03-08T11:23:37.769Z",
		"updatedAt":  "2020-03-08T11:23:37.769Z"
	}
]
```
### Get detail product
* Path: `/product/:id`
* Method: `Get`
* Required header `Authorization` (Have to login for get token )
* Response 
```
{
	"id":  1,
	"title":  "Mascara",
	"description":  "Mascara is a cosmetic commonly used to enhance the eyelashes",
	"price":  3990,
	"createdAt":  "2020-03-08T11:23:37.769Z",
	"updatedAt":  "2020-03-08T11:23:37.769Z"
}
```

### Create product
* Path: `/product`
* Method: `Post`
* Required header `Authorization` (Have to login for get token )
* Body and example

|Field|Type|
|-|-|
|title|text|
|description|text|
|price|number|

```
{
    "title": "product name",
    "description": "product detail",
    "price": 1000
}
```
* Response
```
{
	"id":  999,
	"title":  "product name",
	"description":  "product detail",
	"price":  1000,
	"createdAt":  "2020-03-08T20:46:15.072Z",
	"updatedAt":  "2020-03-08T20:46:15.073Z"
}
```

### Update product
* Path: `/product/:id`
* Method: `Put`
* Required header `Authorization` (Have to login for get token )
* Body and example

|Field|Type|
|-|-|
|title|text|
|description|text|
|price|number|

```
{
    "title": "product name",
    "description": "product detail",
    "price": 1000
}
```
* Response
```
{
	"data":  true
}
```


### Delete product
* Path: `/product/:id`
* Method: `Delete`
* Required header `Authorization` (Have to login for get token )
* Response
```
{
	"data":  true
}
```