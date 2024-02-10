let shortsTab = document.getElementsByTagName('ytd-guide-entry-renderer')[1];
let activeUrl = window.location.href;
let inYoutube = activeUrl.includes('youtube');
let isShorts = activeUrl.includes('shorts');

//console log all variables with label to see if they are working
console.log('activeUrl: ', activeUrl);
console.log('inYoutube: ', inYoutube);
console.log('isShorts: ', isShorts);
console.log('shortsTab: ', shortsTab);

function blockShorts(inYoutube, isShorts) {
  if (inYoutube && !isShorts) {
    try {
      shortsTab = document.getElementsByTagName('ytd-guide-entry-renderer')[1];
      console.log('Hiding shorts tab');
      shortsTab.style.display = 'none';
      console.log('done hiding shorts tab');
    } catch (error) {
      
      console.log('An error occurred while trying to block the shorts tab. "YT shorts blocker"\nError: ' + error);
    }
    try {
      var shortsSuggestions = document.getElementsByTagName('ytd-rich-section-renderer');
      console.log('shortsSuggestions: ', shortsSuggestions)
      console.log('Hiding shorts suggestions');
      for (let i = 0; i < shortsSuggestions.length; i++) {
        shortsSuggestions[i].style.display = 'none';
        console.log('hiding suggestion: ',i, shortsSuggestions[i]);
      }
      console.log('done hiding shorts suggestions');
    } catch (error) {
      console.log('An error occurred while trying to block the shorts suggestions. "YT shorts blocker"\nError: ' + error);
    }
  }
  if (inYoutube && isShorts) {
    try {
      console.log('Blocking shorts');
      bodyTag = document.querySelector('body');
      bodyTag.innerHTML = 'You are watching a short! Shorts are blocked by YT Shorts Blocker <a href="https://www.youtube.com">Go back to YouTube</a>';
      bodyTag.setAttribute('style', 'text-align: center; font-size: 20px; padding: 20px; color: #fff; background-color: #000; position: fixed; top: 0; left: 0; width: 100%; z-index:');
      document.querySelector('title').innerText = 'Shorts Blocked';
      let audio = new Audio();
      audio.muted = true;
    } catch (error) {
      console.log('An error occurred while trying to block the shorts. "YT shorts blocker"\nError: ' + error);
    }
  }
}

blockShorts(inYoutube, isShorts);


setInterval(() => {
  activeUrl = window.location.href;
  console.log('activeUrl: ', activeUrl);
  inYoutube = activeUrl.includes('youtube');
  isShorts = activeUrl.includes('shorts');
  blockShorts(inYoutube, isShorts);
}, 2000);