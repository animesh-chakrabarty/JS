/*
async & defer both are JS loading techniques
But why do we need async or defer when we can just link the JS using the script tag in the HTML <head></head> or <body></body> (synchronous loading) ?
The problem is -
- If we link the script tag on the <head></head> then the HTML parsing and rendering will be blocked untill the JS file is downloaded and fully executed. Also if there is any reference of HTML elements in the JS file that won't work as the HTML is not parsed yet
- If we link the script tag at the end of the <body></body> tag the HTML parsing and rendering won't be blocked and also if there is any reference of the HTML tags on the JS file those will also be executed properly. But the problem in this case will be, if the JS file is too big in size then the load time will increase thus leaving a bad user experience.

To address this problems async & defer tags were introdued. 
Check out the details of how async & defer works on the ./async-defer.png file

resource : https://www.youtube.com/watch?v=GoEBQCp2Nzg
*/