/**
 * Created by user on 4.10.16.
 */


/*calendar*/

calendar = {};

calendar.monthName=[
    'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL',
    'MAY', 'JUNE', 'JULY', 'AUGUST',
    'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
];

calendar.dayName=[
    'M', 'T', 'W', 'T', 'F', 'S', 'S'
];

calendar.selectedDate = {
    'Day' : null,
    'Month' : null,
    'Year' : null
};

// ID элемента для размещения календарика
calendar.element_id=null;

// Выбор даты
calendar.selectDate = function(day,month,year) {
    calendar.selectedDate={
        'Day' : day,
        'Month' : month,
        'Year' : year
    };
    calendar.drawCalendar(month,year);
}

// Отрисовка календарика на выбранный месяц и год
calendar.drawCalendar = function(month,year) {
    var tmp='';
    tmp+='<table class="calendar" cellspacing="0" cellpadding="0">';

    // Месяц и навигация
    tmp+='<tr>';
    tmp+='<td colspan="5" class="navigation" '+
        'onclick="calendar.drawCalendar('+
        calendar.selectedDate.Month+','+
        calendar.selectedDate.Year+');">'+
        calendar.monthName[(month-1)]+'&nbsp;&nbsp;'+year+'<\/td>';
    tmp+='<\/tr>';
    tmp+='<tr class="calendar-button">';
    tmp+='<td class="navigation-left-right" '+
        'onclick="calendar.drawCalendar('+(month>1?(month-1):12)+
        ','+(month>1?year:(year-1))+');">&#8249;<\/td>';

    tmp+='<td class="navigation-left-right" '+
        'onclick="calendar.drawCalendar('+(month<12?(month+1):1)+
        ','+(month<12?year:(year+1))+');">&#8250;<\/td>';
    tmp+='<\/tr>';

    // Шапка таблицы с днями недели
    tmp+='<tr class="calendar-day">';
    tmp+='<th>'+calendar.dayName[0]+'<\/th>';
    tmp+='<th>'+calendar.dayName[1]+'<\/th>';
    tmp+='<th>'+calendar.dayName[2]+'<\/th>';
    tmp+='<th>'+calendar.dayName[3]+'<\/th>';
    tmp+='<th>'+calendar.dayName[4]+'<\/th>';
    tmp+='<th class="holiday">'+calendar.dayName[5]+'<\/th>';
    tmp+='<th class="holiday">'+calendar.dayName[6]+'<\/th>';
    tmp+='<\/tr>';

    // Количество дней в месяце
    var total_days = 32 - new Date(year, (month-1), 32).getDate();
    // Начальный день месяца
    var start_day = new Date(year, (month-1), 1).getDay();
    if (start_day==0) { start_day=7; }
    start_day--;
    // Количество ячеек в таблице
    var final_index=Math.ceil((total_days+start_day)/7)*7;

    var day=1;
    var index=0;
    do {
        // Начало строки таблицы
        if (index%7==0) {
            tmp+='<tr>';
        }
        // Пустые ячейки до начала месяца или после окончания
        if ((index<start_day) || (index>=(total_days+start_day))) {
            tmp+='<td class="grayed">&nbsp;<\/td>';
        }
        else {
            var class_name='';
            // Выбранный день
            if (calendar.selectedDate.Day==day &&
                calendar.selectedDate.Month==month &&
                calendar.selectedDate.Year==year) {
                class_name='selected';
            }
            // Праздничный день
            else if (index%7==6 || index%7==5) {
                class_name='holiday';
            }
            // Ячейка с датой
            tmp+='<td class="'+class_name+'" '+
                'onclick="calendar.selectDate('+
                day+','+month+','+year+');">'+day+'<\/td>';
            day++;
        }
        // Конец строки таблицы
        if (index%7==6) {
            tmp+='<\/tr>';
        }
        index++;
    }
    while (index<final_index);

    tmp+='<\/table>';

    // Вставить таблицу календарика на страницу
    var el=document.getElementById(calendar.element_id);
    if (el) {
        el.innerHTML=tmp;
    }
}
// ID элемента для размещения календарика
calendar.element_id = 'calendar_table';

// По умолчанию используется текущая дата
calendar.selectedDate={
    'Day' : new Date().getDate(),
    'Month' : parseInt(new Date().getMonth())+1,
    'Year' : new Date().getFullYear()
};

// Нарисовать календарик
calendar.drawCalendar(
    calendar.selectedDate.Month,
    calendar.selectedDate.Year
);

/*AUDIO*/
$(function() {
    $('audio').mediaelementplayer({
        audioHeight: 50,
        audioWidth: 770,
        success: function(me) {
            $('#audio-type').html( me.pluginType);
        }
    });
});

/*stycky btn-toggle*/

$(document).ready(function () {

    $('[data-toggle="offcanvas"]').on('click', function () {

        $('.row-offcanvas').toggleClass('active');
        $( '.toggle-btn').toggle();

    });
});

/*STYCKY BUTTON*/
var obj = $('#sticky');
var objA = $('.btn-toggle');
var offset = obj.offset();
var topOffset = offset.top - 55;


$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();

    if (scrollTop >= topOffset){
        obj.css({
            top: '50px',
            right: '15px',
            position: 'fixed',
            zIndex: '101',
            display:'block'
        });
        objA.css({
            backgroundColor: '#3C3B3A'
        });
    }

    if (scrollTop < topOffset){
        obj.css({
            right: '0',
            top: '0',
            position: 'relative'
        });
        objA.css({
            backgroundColor: 'transparent'
        })
    }


    return false;
});    