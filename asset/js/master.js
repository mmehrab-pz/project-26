let cover = document.getElementById('cover')
let Fname = document.getElementById('Fname')
let Lname = document.getElementById('Lname')
let Uname = document.getElementById('Uname')
let Email = document.getElementById('Email')
let Pass = document.getElementById('Pass')
let Pass2 = document.getElementById('Pass2')
let CheckTerms = document.getElementById('CheckTerms')
let neWpass = ''
let LogEmail = document.getElementById('LogEmail')
let LogPass = document.getElementById('LogPass')

document.getElementById('ActiveSign').addEventListener('click', () => {
    cover.classList.add('CoverTranslate')
    Fname.value = ''
    Lname.value = ''
    Uname.value = ''
    Email.value = ''
    Pass.value = ''
    Pass2.value = ''
    CheckTerms.checked = false
    Fname.classList.remove('input-ok')
    Lname.classList.remove('input-ok')
    Uname.classList.remove('input-ok')
    Email.classList.remove('input-ok')
    Pass.classList.remove('input-ok')
    Pass2.classList.remove('input-ok')
    CheckTerms.classList.remove('input-ok')
    Fname.classList.remove('input-error')
    Lname.classList.remove('input-error')
    Uname.classList.remove('input-error')
    Email.classList.remove('input-error')
    Pass.classList.remove('input-error')
    Pass2.classList.remove('input-error')
    CheckTerms.classList.remove('input-error')
})

document.getElementById('ActiveLogin').addEventListener('click', () => {
    cover.classList.remove('CoverTranslate')
    LogEmail.value = ''
    LogPass.value = ''
    LogEmail.classList.remove('input-ok')
    LogPass.classList.remove('input-ok')
    LogEmail.classList.remove('input-error')
    LogPass.classList.remove('input-error')

})

// ----------------------------------------regex-------------------------------------------
Fname.addEventListener('input', () => {
    if (Fname.value.search(/[a-zA-Z]{3,15}$/) || Fname.value == null || Fname.value == '') {
        Fname.classList.remove('input-ok')
        Fname.classList.add('input-error')
        Fname.setAttribute('data-status', 'false')

    } else {
        Fname.classList.remove('input-error')
        Fname.classList.add('input-ok')
        Fname.setAttribute('data-status', 'true')

    }
})
Lname.addEventListener('input', () => {
    if (Lname.value.search(/[a-zA-Z]{3,15}$/) || Lname.value == null || Lname.value == '') {
        Lname.classList.remove('input-ok')
        Lname.classList.add('input-error')
        Lname.setAttribute('data-status', 'false')

    } else {
        Lname.classList.remove('input-error')
        Lname.classList.add('input-ok')
        Lname.setAttribute('data-status', 'true')

    }
})
Uname.addEventListener('input', () => {
    if (Uname.value.search(/[a-zA-Z]{3,15}$/) || Uname.value == null || Uname.value == '') {
        Uname.classList.remove('input-ok')
        Uname.classList.add('input-error')
        Uname.setAttribute('data-status', 'false')

    } else {
        Uname.classList.remove('input-error')
        Uname.classList.add('input-ok')
        Uname.setAttribute('data-status', 'true')

    }
})
Email.addEventListener('input', () => {
    if (Email.value.search(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/) || Email.value == null || Email.value == '') {
        Email.classList.remove('input-ok')
        Email.classList.add('input-error')
        Email.setAttribute('data-status', 'false')

    } else {
        Email.classList.remove('input-error')
        Email.classList.add('input-ok')
        Email.setAttribute('data-status', 'true')

    }
})
Pass.addEventListener('input', () => {
    if (Pass.value.search(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/) || Pass.value == null || Pass.value == '') {
        Pass.classList.remove('input-ok')
        Pass.classList.add('input-error')
        Pass.setAttribute('data-status', 'false')

    } else {
        Pass.classList.remove('input-error')
        Pass.classList.add('input-ok')
        Pass.setAttribute('data-status', 'true')
        neWpass = Pass.value
    }
})
Pass2.addEventListener('input', () => {
    console.log(neWpass);
    if (Pass2.value.search(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/) || Pass2.value == null || Pass2.value == '') {
        Pass2.classList.remove('input-ok')
        Pass2.classList.add('input-error')
        Pass2.setAttribute('data-status', 'false')

    } else if (Pass2.value != neWpass) {
        Pass2.classList.remove('input-ok')
        Pass2.classList.add('input-error')
        Pass2.setAttribute('data-status', 'false')

    } else {
        Pass2.classList.remove('input-error')
        Pass2.classList.add('input-ok')
        Pass2.setAttribute('data-status', 'true')
    }
})

CheckTerms.addEventListener('change', () => {
    console.log(CheckTerms.checked);
    if (CheckTerms.checked == false) {
        CheckTerms.setAttribute('data-status', 'false')
    } else {
        CheckTerms.classList.add('input-ok')
        CheckTerms.setAttribute('data-status', 'true')
    }
})

LogEmail.addEventListener('input', () => {
    if (LogEmail.value.search(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/) || LogEmail.value == null || LogEmail.value == '') {
        LogEmail.classList.remove('input-ok')
        LogEmail.classList.add('input-error')
        LogEmail.setAttribute('data-status', 'false')

    } else {
        LogEmail.classList.remove('input-error')
        LogEmail.classList.add('input-ok')
        LogEmail.setAttribute('data-status', 'true')

    }
})

LogPass.addEventListener('input', () => {
    if (LogPass.value.search(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/) || LogPass.value == null || LogPass.value == '') {
        LogPass.classList.remove('input-ok')
        LogPass.classList.add('input-error')
        LogPass.setAttribute('data-status', 'false')

    } else {
        LogPass.classList.remove('input-error')
        LogPass.classList.add('input-ok')
        LogPass.setAttribute('data-status', 'true')
    }
})

// ---------------------------------signUp click-----------------------------------
document.getElementById('signup-btn').addEventListener('click', () => {
    if (
        Fname.getAttribute("data-status") == "true" &&
        Lname.getAttribute("data-status") == "true" &&
        Uname.getAttribute("data-status") == "true" &&
        Email.getAttribute("data-status") == "true" &&
        Pass2.getAttribute("data-status") == "true" &&
        CheckTerms.getAttribute("data-status") == "true"
    ) {
        const newTask = {
            Fname: Fname.value,
            Lname: Lname.value,
            Uname: Uname.value,
            Email: Email.value,
            Pass: Pass2.value,
        }
        fetch('https://6529c41955b137ddc83f229b.mockapi.io/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            // Send your data in the request body as JSON
            body: JSON.stringify(newTask)
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
        }).then(task => {
            // do something with the new task

            document.getElementById('modal-1').classList.add('active-modal')
            setTimeout(() => {
                document.getElementById('modal-1').classList.remove('active-modal')
                cover.classList.remove('CoverTranslate')
            }, 3500);
        }).catch(error => {
            // handle error
            document.getElementById('modal-1').classList.add('active-modal')
        })
    } else {
        CheckTerms.classList.add('input-error')
        document.getElementById('modal-2').classList.add('active-modal')
        setTimeout(() => {
            document.getElementById('modal-2').classList.remove('active-modal')
        }, 1500);
    }
})

// ---------------------------------login click-----------------------------------
document.getElementById('login-btn').addEventListener('click', () => {
    const url = new URL('https://6529c41955b137ddc83f229b.mockapi.io/users');
    url.searchParams.append('Email', LogEmail.value); //https://PROJECT_TOKEN.mockapi.io/tasks?completed=false

    fetch(url, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
    }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error


    }).then(tasks => {
        // mockapi returns first 10 tasks that are not completed
        console.log(tasks);
        console.log(tasks.length);
        if (LogEmail.getAttribute("data-status") == 'true' && LogPass.getAttribute("data-status") == 'true') {
            if (tasks.length == 0) {
                document.getElementById('modal-3').classList.add('active-modal')
                setTimeout(() => {
                    document.getElementById('modal-3').classList.remove('active-modal')
                }, 2000);
                LogEmail.classList.remove('input-ok')
                LogEmail.classList.add('input-error')
            } else {
                tasks.map((item) => {
                    if (LogPass.value == item.Pass) {
                        document.getElementById('modal-5').classList.add('active-modal')
                        setTimeout(() => {
                            document.getElementById('modal-5').classList.remove('active-modal')
                            window.location = '../admin.html'
                        }, 2000);
                    } else {
                        document.getElementById('modal-4').classList.add('active-modal')
                        setTimeout(() => {
                            document.getElementById('modal-4').classList.remove('active-modal')
                        }, 2000);
                        LogPass.classList.remove('input-ok')
                        LogPass.classList.add('input-error')
                    }
                })
            }

        } else {
            document.getElementById('modal-2').classList.add('active-modal')
            setTimeout(() => {
                document.getElementById('modal-2').classList.remove('active-modal')
            }, 1500);
        }

    }).catch(error => {

    })
})
