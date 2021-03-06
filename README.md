# GreenScreen
*Ever feel like the internet isn't a very vegan-friendly place? Let's change that.*
https://chrome.google.com/webstore/detail/greenscreen/ckgigmhiodaanddigljglmllggjekoda

## :corn: Why GreenScreen? :tangerine:

The internet is rife with images and language that can be disturbing to individuals who follow a vegan lifestyle. Wouldn't it be nice if your browser could ensure that you won't be exposed to the undue stress that an unfiltered internet brings?

## :carrot: Experience a Kinder Internet :pear:

GreenScreen is a Google Chrome extension that filters out any words and images that are not vegan-friendly and replaces them with plant-based alternatives. This will ensure ease of mind when browsing, and even come up with vegan-friendly recipe substitutions for when you find a recipe that wasn't developed with moral concern in mind.

## :cucumber: Behind the Screen :cherries:

We began by creating a simple Chrome extension that replaced meat-related terms on any webpage with a random vegetable-related word. We then added the functionality to replace images on a page, and further refined that to replace only images that contained meat. This was done by piping image data through the Watson API, which classifies images based on key terms that relate to the image contents, and only targeting images that contain potentially disturbing content.

## :apple: Our Journey :grapes:

Chrome extensions don't interface nicely with Node.js, so we had to troubleshoot this and eventually resort to writing our extension in raw JavaScript. This was a challenge for all of our team members, non of whom had much prior experience with the language. We used a Watson image-recognition API instead of our original plan, which was the Google Cloud Vision API, because of troubles with authorization across HTTP calls. Additionally, one of our members was editing the DevPost with the word-replacement extension enabled, which replaced some choice words in the text and caused confusion when the DevPost decided to save the edited text.

## :peach: Compatibility :mushroom:

GreenScreen works brilliantly for websites! However, because of Google's image caching procedures, this extension won't be successful for Google Images searches. If you'd like to see an example of how the image search replacement would work if Google was slightly less secure, navigate to Bing.com and run an images search there--it'll behave as expected. The word replacement algorithm works universally.


Icons made by Freepik from www.flaticon.com
