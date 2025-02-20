function changebg(bg,title) {
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');
    banner.style.background = 'url("../images/movies/${bg}")';
    banner.style.backgroundsize = 'cover';
    banner.style.backgroundposition = 'center';

contents.forEach(content => {
    content.classlist.remove('active');
    if(content.classlist.contains(title)) {
        content.classlist.add('active');
    }
  });
}