# Project Name

#### A brief program description

#### By _**Matt Miller**_

## Description

This webpage will allow a user to ... more detailed.

#### Specifications

| Specification | Input | Output |
| --- | --- | --- |
| The program should successfully make an API request to BetterDoctor | Input: Submit | Output: 200 OK |
| The program should return Portland doctors from API request | Input: Submit | Output: List of portland area doctors |
| The program should make an API request for a given query of medical issue | Input: "Ear" | Output: List of portland area doctors who treat ear issues |
| If the API request results in an error, the program should return a notification that states what that error was | Input: "Ear" (with wrong API key) | Output: "There was an error: Unauthorized" |
| If the query does not return any results, the program should return that no results match the query | Input: "*&$!" | Output: "Your search returned no matches." |

## Setup/Installation Requirements

* View program by cloning repository from https://github.com/mattfmiller/doctor-lookup
* Run 'npm install' in project root directory in terminal.
* Run 'npm run build' in terminal to bundle and build project distribution folder.
* Run 'npm test' in terminal to view jasmine tests
* Run 'npm run start' in terminal to view project in development mode.
* If needed, create .env file in project's root directory that contains your API keys in the form: exports.apiKey=[YOUR API_KEY GOES HERE]

## Known Bugs

N/A

## Support and contact details

For support, contact: matt.f.miller@live.com

## Technologies Used

* HTML
* CSS _(Bootstrap 4.1)_
* JavaScript _(jQuery 3.2.1)_
* Node.js
* npm
* Webpack
* ESLint
* Babel
* Jasmine
* Karma


### License

This software is licensed under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Copyright (c) 2018 **Matt Miller**
