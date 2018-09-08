//Route requests to appropriate pages
btnHome.addEventListener('click', e => {
    window.location =  '/'; 
});

btnServices.addEventListener('click', e => {
    window.location = 'static/services.html';
})

btnJobs.addEventListener('click', e => {
    window.location =  'static/jobs.html'; 
    });

btnContactUs.addEventListener('click', e => {
    window.location = 'static/services.html';
})

//Route dropdown menu to appropriate requests
btnHomeSmall.addEventListener('click', e => {
    window.location =  '/'; 
});

btnServicesSmall.addEventListener('click', e => {
    window.location = 'static/services.html';
})

btnJobsSmall.addEventListener('click', e => {
    window.location =  'static/jobs.html'; 
});

btnContactUsSmall.addEventListener('click', e => {
    window.location = 'static/services.html';
})

//Route logo in header to home page
btnHomeMenu.addEventListener('click', e => {
    window.location =  '/'; 
});