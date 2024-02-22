/* FETCH запрос */
// fetch('data.json')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json(); // или response.text() для текстовых данных
//     })
//     .then(data => {
//         // Обработка полученных данных
//         console.log(data);
//     })
//     .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//     });

/* =================================================== */
/* ----------------------- смена цвета ----------------- */
const menuIcon = document.getElementById('link-menu');
const menu = document.querySelector('.navigation');
let isMenuOpen = false;

menuIcon.addEventListener('click', function() {
    if (!isMenuOpen) {
        menu.style.display = 'block';
        menuIcon.innerHTML = '<i class="las la-times"></i>';
    } else {
        menu.style.display = 'none';
        menuIcon.innerHTML = '<i class="las la-bars"></i>';
    }
    isMenuOpen = !isMenuOpen;
});

// const isHidden1 = document.querySelector('.is-hidden1')
// isHidden1.addEventListener('', function() {
//     isHidden1.style.color = '#fff';
// })


//======================================
// смена цвета на странице HOME
const hidden1 = document.querySelector('.is-hidden1');
const hidden2 = document.querySelector('.is-hidden2');

let isHinden1 = false;

setInterval(() => {
    if (!isHinden1) {
        hidden1.style.color = 'rgb(188, 18, 188)';
        hidden1.style.transition = '2s';
    } else {
        hidden1.style.color = '#fff';
        hidden1.style.transition = '2s';
    }
    isHinden1 = !isHinden1;
}, 4000);

//======================================
// Функция для скачивания файла по прямой ссылке
function downloadFile() {
    const pdfURL = 'https://drive.google.com/file/d/1kGI4B9ub39HK87_8njJj5uer9GWzGI95/view'; // Замените на свою ссылку

    // Создание ссылки для загрузки файла
    const link = document.createElement('a');
    link.href = pdfURL;
    link.download = 'my_cv.pdf'; // Замените на желаемое название файла
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Получаем кнопку для скачивания PDF
const downloadBtn = document.getElementById('downloadPdf');

// Добавляем обработчик события для скачивания PDF по клику
downloadBtn.addEventListener('click', downloadFile);

//==========================================================
/*------------------ SEND EMAIL---------------------*/
// $(document).ready(function() {
//     $('#contactForm').submit(function(e) {
//         e.preventDefault();

//         // Получаем данные формы
//         var formData = $(this).serialize();

//         // Отправка данных на серверный скрипт с помощью AJAX
//         $.ajax({
//             type: 'POST',
//             url: 'php/process-form.php',                   // Замените это на ваш путь к серверному скрипту
//             data: formData,
//             success: function(response) {
//                 // Обработка успешного ответа от сервера
//                 $('.output_message').text('Message Sent');
//                 // Очистить поля формы после отправки
//                 $('#name, #email, #comment').val('');
//             },
//             error: function(error) {
//                 // Обработка ошибки отправки на сервер
//                 $('.output_message').text('Error Sending Message');
//             }
//         });
//     });
// });


//==============================================================
/* ----------------------- LANGUAGE ---------------------------- */
// function changeToEnglish() {
//     const greetingElement = document.getElementById('greeting');
//     if (greetingElement) {
//         greetingElement.innerText = 'HI THERE!';
//     }

//     // Остальной код изменения на английский язык
// }

// function changeToGerman() {
//     const greetingElement = document.getElementById('greeting');
//     if (greetingElement) {
//         greetingElement.innerText = 'HALLO!';
//     }

//     // Остальной код изменения на немецкий язык
// }

// // Получаем все кнопки изменения языка
// const languageButtons = document.querySelectorAll('.btn-language');

// // Присваиваем обработчик событий каждой кнопке для изменения языка
// languageButtons.forEach(button => {
//     button.addEventListener('click', function(event) {
//         const language = event.currentTarget.querySelector('.text-language').innerText;

//         // В зависимости от выбранного языка, вызываем соответствующую функцию
//         if (language === 'EN') {
//             changeToEnglish();
//         } else if (language === 'DE') {
//             changeToGerman();
//             // Добавьте другие условия для других языков, если нужно
//         }
//     });
// });



