# Tokens

Tokens are digital assets built on existing blockchain networks, such as Ethereum or Binance. They serve a variety of purposes, from representing ownership of a specific asset/project to enabling access to a platform's services or products.

Tokens are significant in the crypto industry for several reasons:

**Utility**:  They can be used for accessing services, paying fees, or participating in governance processes.
**Crowdfunding**: Used in Initial Token Offerings (ITOs) as a means of crowdfunding for blockchain projects in exchange for funds like Bitcoin or Ethereum.
**Decentralized Finance (DeFi)**:  Tokens can represent real-world assets such as currencies, commodities, or even real estate, known as asset-backed tokens

This REST-API provides a list of these tokens and a synopsis of their primary functions.

## REST-API Docs
### **/api/tokens**
**GET** 
Returns a list of all exisiting tokens
##### Response
- Status: 200 / 500
- Content-Type: application/json 
- Response-Schema:

```
[
  {
    "name": {
        "type": "string"
    },
    "ticker": {
        "type": "string"
    },
    "description": {
        "type": "string"
    },
    "id": {
        "type": "number"
    }
  }
]
```

**POST**
Creates new token. 
Returns created item including id.
##### Request
- Content-Type: application/json 
- Request-Body-Schema:

```
{
  "name": {
      "type": "string",
      "required": true
  },
  "ticker": {
      "type": "string",
      "required": true
  },
  "description": {
      "type": "string",
      "required": true
  }
}
```
##### Response
- Status: 201 / 400 / 500
- Content-Type: application/json 
- Response-Schema:

```
{
  "name": {
      "type": "string"
  },
  "ticker": {
      "type": "string"
  },
  "description": {
      "type": "string"
  },
  "id": {
      "type": "number"
  }
}
```
### **/api/tokens/:id**
**GET** 
Returns a single token
##### Response
- Status: 200 / 400 / 500
- Content-Type: application/json 
- Response-Schema:

```
{
  "name": {
      "type": "string"
  },
  "ticker": {
      "type": "string"
  },
  "description": {
      "type": "string"
  },
  "id": {
      "type": "number"
  }
}
```



## How to run
### Locally as a service
- From the root of the project run `docker compose up` 

**The api should be running on http://127.0.0.1:3000 or http://localhost:3000**

### Locally in development mode
- From the root of the project:
  - run `docker compose up -d postgresdb` to start only the Database
  - run `npm run start-dev` to have the api running locally, compiling typescript and watching changes continiously 

**The api should be running on http://127.0.0.1:3000 or http://localhost:3000**

## How to test
### Use Postman
- Import the collection located on the root of this project /postman
- The host-url is alreadypointing to the service running on [Heroku](https://tokens-api-320b6f9fa4f2.herokuapp.com/)
- Inside the test folder, all requests point to http://localhost:3000 Feel free to interchange it with the host-url, although not recomended in real-life.

## Roadmap (internal backlog)
#### What still needs to be done in order to consider this app prod-ready
- **Testing:** I did not get much into test besides the examples on Postman, which do provide a nice integration and e2e overview.
- **CI/CD:** Even though once a feature branch is merged into the *main* branch a deployments will be triggered, the pipeline from development to deployment could be improved.
- **Auth:** There is absolutely no authehntication nor authorisation implemented in this api.
- **CRUD:** Further actions like updating and deleting objects should be implemented.

