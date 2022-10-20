!(function(d){
    function aboutPageRedirection()
    {
        let introRead = document.querySelector('.introduction .btn');
        introRead.addEventListener('click', () => {
            window.location.href = '../about.html';
        });
    }

    aboutPageRedirection();
}) (document);