---
path: 'salesforce-apis'
date: '2019-04-11'
title: 'Different Salesforce APIs'
tags: ['salesforce', 'articles']
excerpt: 'Lately, I have been looking into the different APIs that are provided by Salesforce for development. As a result, I wrote this article to write down the differences between the most common ones.'
---

Lately, I have been looking into the different APIs that are provided by Salesforce for development. As a result, I wrote this article to write down the differences between the most common ones.

1. SOAP API
   - SOAP API uses a SOAP wrapper for API operations.
   - Typically, it is used in the enterprise setting because you need tooling to create SOAP messages. While it's possible to concatenate strings to build a SOAP envelop, it's pretty laborious.
   - Oriented around accessing data and manipulating records.


2. Metadata API
   - Metadata API focuses on the metadata.
   - It gives you an API to manipulate layouts, VF pages, Apex triggers and classes, etc (pretty much anything you can do to your org from the browser interface you can also do from the Metadata API).


3. Apex API
   - APEX API exposes API objects and calls that allow you to execute an anonymous block of code, compile classes, and run tests.


4. APEX SOAP
   - SOAP API exposes Apex methods via SOAP.
   - A use case would be writing your own Apex method that takes parameters of a person's name, company name, and phone number and then create an account and a contact in one operation as far as the client is concerned. You can then expose that method as a service operation by using the `@WebService` annotation on the method. This will expose the method via SOAP and download the WSDL.
   - A drawback of this is and SOAP is that it is pretty heavy weight. It was designed for a world in which people imagined that we could be taking these messages and passing them through intermediary systems.


5. REST
   - SOAP can be overkill. If you're just sending a message from a client to a server and sending back a response, you can use REST.
   - REST = Representational State Transfer
   - The concept of REST is that every object in the system is associated with a URL. When you perform operations on that URL, you're accessing a representation of the state of the object. So, if you do a GET on a URL representing an account record, you just get back XML or JSON that is the state of that account.
     - POST will create a new account
     - DELETE will delete that account
     - There are new additions to HTTP methods called `PATCH` that you can use to update that account. What you're basically doing is passing XML or JSON back and forth and leveraging HTTP operations.
   - In the REST API, the metadata is read-only. So a developer can perform a similar operation from REST, for example, you can retrieve a list of all the objects that are available in the system. Then, for a given object, you could retrieve the list of its fields.


6. Bulk API
   - This is an async API and has the ability to work with large data sets like 500,000 records.
   - You don't want to use this API if you just need to a handful of records and want to create a dynamic UI that's easy to program. This API is to be used for loading lots of data.


7. APEX REST
   - In the same way that you can write Apex methods and expose it via a SOAP interface, you can now have an Apex method exposed via REST.
   - This is useful because a benefit of the REST API is that you can do updates, but they're on individual records.
   - An example of this would be if you wanted to do an atomic update where you want to update an account and a contact and you want them to both succeed or both fail. It's not possible to do that with just the REST API. You would need to do a PATCH on the account and a PATCH on the contact objects.
     - In order to solve this, you could define an Apex method that performs both of those updates and expose the method via REST. You would then call the method, send the account and contact data, and then make the updates in that method.
     - The way that Apex methods work is that if the method has one successful operation and the next operation results in an error, the method will roll back any changes that were made.
     - This means that you can define an Apex method that does multiple updates but is effectively one transaction.


8. Chatter API
   - The Chatter API presents a higher-level abstraction of that data. Instead of dealing with the underlying objects, you're dealing with a slightly abstract representation of a user's Chatter feed and the entries in it.
   - It's designed so that you can do one call and get pretty much everything you need in the 80/20 case. You may need to drill down a little bit, but certainly most applications that are manipulating Chatter are making pretty standard requests.
