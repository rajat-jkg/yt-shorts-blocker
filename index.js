let shortsTab = document.getElementsByTagName('ytd-guide-entry-renderer')[1];
let activeUrl = window.location.href;
let inYoutube = activeUrl.includes('youtube');
let isShorts = activeUrl.includes('shorts');
let shortsTabMini = document.getElementsByTagName('ytd-mini-guide-entry-renderer')[1];
function blockShorts(inYoutube, isShorts) {
  if (inYoutube && !isShorts) {
    try {
      shortsTab = document.getElementsByTagName('ytd-guide-entry-renderer')[1];
      shortsTab.style.display = 'none';
    } catch (error) {      
      console.log('');
    }
    try {
      shortsTabMini = document.getElementsByTagName('ytd-mini-guide-entry-renderer')[1];
      shortsTabMini.style.display = 'none';
    } catch (error) {
      
      console.log('');
    }
    try {
      var shortsSuggestions = document.getElementsByTagName('ytd-rich-section-renderer');
      for (let i = 0; i < shortsSuggestions.length; i++) {
        shortsSuggestions[i].style.display = 'none';
        console.log('hiding suggestion: ',i, shortsSuggestions[i]);
      }
      //shorts remix suggestions
      document.querySelector('#contents > ytd-reel-shelf-renderer').style.display = 'none';
    } catch (error) {
      console.log('An error occurred while trying to block the shorts suggestions. "YT shorts blocker"\nError: ' + error);
    }
  }
  if (inYoutube && isShorts) {
    try {
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
  inYoutube = activeUrl.includes('youtube');
  isShorts = activeUrl.includes('shorts');
  blockShorts(inYoutube, isShorts);
}, 600);