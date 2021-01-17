*API*

```How does login/signup on a website works on the back-end? Or how when you search for "Me at the Zoo" on YouTube, you get a bunch of results and are able to stream off of a remote machine?```

This can achieved with the presence of following three components:
-`REST Client`:You are using one right now! Yes, the browser can act as an uncontrolled REST client. Other examples are `curl` is a used in command lines or scripts to transfer data and code libraries like axios, superagent and got or some dedicated apps like Postman
-`REST Service`: the server.
-`REST API`: this defines the endpoint and methods allowed to access/submit data to the server.

`Representational state transfer (REST) is a software architectural style that defines a set of constraints to be used for creating Web services. RESTful Web services allow the requesting systems to access and manipulate textual representations of Web resources by using a uniform and predefined set of stateless operations.`

Earlier, I told that you can either request data or modify it, but how will the server know what kind of operation the client wants to perform? 
- `GET`: Get resource from the server.
- `POST`: Create resource to the server.
- `PATCH`or `PUT`: Update existing resource on the server.
- `DELETE`: Delete existing resource from the server.

Okay but where will you have to send the data?
`Endpoint`: It is the URL where the REST Server is listening. {localhost:5000}

Alright but how will the client and server identify a call.
`Headers`: The additional details provided for communication between client and server
  - `Request`:
        -`host`: the IP of client
        - `accept-language`: language understandable by the client
        - `user-agent`: data about client, operating system and vendor
  - `Response`:
        - `status`: the status of request or HTTP code.
        - `content-type`: type of resource sent by server.
        - `set-cookie`: sets cookies by server

And lastly, the most important part:
`Data`: (also called body or message) contains info you want to send to the server.