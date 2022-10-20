!(function(d){
    function aboutPageRedirection()
    {
        let introRead = document.querySelector('.introduction .btn');
        introRead.addEventListener('click', () => {
            window.location.href = '../about.html';
        });
    }
    
    function courseSectionRedirection()
    {
        let courseRead = document.querySelectorAll('#courses .card-body .btn');
        for(let i = 0; i < 4; i++)
        {
            courseRead[i].addEventListener('click', () => {
                window.location.href = '../course.html';
            });
        }
    }

    function notesPage() 
    {
        let submitBtn = document.querySelector('.notes-main input[type="button"');
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
        })
    }

    aboutPageRedirection();
    courseSectionRedirection();
    notesPage();

}) (document);