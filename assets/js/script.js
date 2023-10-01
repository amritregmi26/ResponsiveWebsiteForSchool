!(function(d){

    if(window.location.href == 'https://amritregmi.com.np/' || window.location.href == 'https://amritregmi.com.np/index.html')
    {
        function aboutPageRedirection()
        {
            let introRead = d.querySelector('.introduction .btn');
            introRead.addEventListener('click', () => {
                window.location.href = '../about.html';
            });
        }

        function courseSectionRedirection()
        {
            let readMoreBtn = d.querySelectorAll('#courses .card-body .btn');
            for(let i = 0; i < 4; i++)
            {
                readMoreBtn[i].addEventListener('click', () => {
                    window.location.href = '../course.html';
                    let title = readMoreBtn[i].parentElement.children[0].children[0].innerHTML;
                    localStorage.setItem("title", `${title}`);
                });
            }
        }

        // Function Call
        courseSectionRedirection();
        aboutPageRedirection();
    }

    if(window.location.href == 'https://amritregmi.com.np/notes.html')
    {
        function notesPage() 
        {
            let submitBtn = d.querySelector('.notes-main input[type="button"]');
            submitBtn.addEventListener('click', (e) => {
                e.preventDefault();
            })
        }

        // Function call
        notesPage();
    }

    if(window.location.href == 'https://amritregmi.com.np/course.html')
    {
       let courseTitle = localStorage.getItem("title");
       d.querySelector(".course-main .course-description h1").innerHTML = courseTitle;   
    }

}) (document);
