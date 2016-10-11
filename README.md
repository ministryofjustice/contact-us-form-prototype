# Contact Us Form Prototype

## Background

As part of the email triage/handling project, we're looking at improving the front-end user experience when they get in touch with us by directing them to appropriate GOV.UK resources when they submit an enquiry rather than them getting in touch with us and having to wait for us to point them in the right direction. 

## About the prototype

The prototype demonstrates a three stage submission process 

1. Enter enquiry
2. Review suggested content and/or submit enquiry
3. Confirmation page

## Functionality

The prototype will walk people through the process, however, the API look up needed to serve content does not exist in the prototype. Search responses are hard-coded for particular key words.

These include:

var health = ["health", "medicine", "medicines", "doctor"]
var passport = ["passport", "lost", "renew", "Passport"]
var lifestyle = ["lifestyle", "cost", "sunshine"]

