let day = +prompt('Enter birthday'),
    month = +prompt('Enter month'),
    year = +prompt('Enter year')
console .log (isNaN(day))
if (isNaN(day) || isNaN(month) || isNaN(year) || day<1 || day>31 || month <1 || month>12 || year<0){
    console .log('ErrorDATA!!!')
}   else {
    console .log('Correct DATA!')
}

var arr =
[
    [title = "Овен",img ="src = https://sites.google.com/site/tvijgoroskop/_/rsrc/1472783028609/harakteristika-znakiv-zodiaku-1/244.jpg?height=224&width=400" ,description = "Природжений лідер, і з цим нічого не поробиш. Вже при першому знайомстві з Овном ви буквально шкірою можете відчути головну особливість цього знака Зодіаку – непохитну впевненість в собі і в своїй правоті. Навіть коли Овен мовчить, в кожному його жесті читається внутрішня твердість і непохитність. А вже якщо він заговорить... Повірте, сперечатися з Овном – справа не дуже перспективна."],
    [title = "Телець",img = "https://sites.google.com/site/tvijgoroskop/_/rsrc/1472783029423/harakteristika-znakiv-zodiaku-1/630.jpg?height=224&width=400",description = "Телець на подив наполегливий і сильний, але, як не дивно, дізнатися народженого під цим знаком Зодіаку легше всього за його непомітністю. У компанії Телець буде триматися осторонь і швидше взагалі поспішить покинути це гучне незатишне збіговисько. Тільки в колі близьких друзів, де Тельцю гарантований повний комфорт – і фізичний, і душевний – він може протриматися цілий вечір, але і тоді говірким або емоційним його не назвеш. Однак за його скупими фразами і неквапливими рухами завжди відчувається грунтовність і прихована сила."],
    [title = "Козеріг" ,img = "https://images.unian.net/photos/2020_01/thumb_files/1000_545_1578688558-4363.jpg",description = "Козеріг – десятий знак зодіакального кола. До цього знака Зодіаку належать люди, народжені в період з 22 грудня до 20 січня.Це жіночий знак, його стихією є земля, символом – голова і передня частина тулуба козла, а задня частина риб'яча. Покровителькою цього знака Зодіаку є планета Сатурн. Камені-талісмани: гірський кришталь, синій аквамарин, гагат чорний, сапфір чорного або темного синього кольору, онікс.Козерогу притаманні такі основні риси характеру: практичність, цілеспрямованість і завзятість. Цей знак Зодіаку приймає рішення повільно, але завжди обдумано. Він прекрасний стратег, дуже обережний і передбачливий.Характеристика Козерога До сильних якостей представників цього знака можна віднести цілеспрямованість, стійкість і відповідальність. Козеріг має дар не втрачати з уваги головну мету. Він не боїться самотності й готовий переносити будь-які життєві труднощі, долати навіть найскладніші перешкоди. Немає такого завдання, з яким би не впорався цей представник земної стихії."],
    [title = "Близнюки" ,img = "https://sites.google.com/site/tvijgoroskop/_/rsrc/1472783028880/harakteristika-znakiv-zodiaku-1/726.jpg?height=224&width=400",description = "Одна нога тут, інша там» – це вираз ніби спеціально створено для неспокійних Близнюків, які так багато хочуть дізнатися про життя і яким через те так не сидиться на місці. Спілкуючись з народженим під цим знаком Зодіаку, ви можете на деякий час забути про те, що можна і чого не можна, і взагалі, день зараз чи ніч, – Близнюки не сприймають обмежень і умовностей, втім, не чекають подібних безглуздих жертв і від вас." ],
    [title = "Рак" ,img = "https://sites.google.com/site/tvijgoroskop/_/rsrc/1472783029094/harakteristika-znakiv-zodiaku-1/823.jpg?height=224&width=400",description = "Рак – найбільш завбачливий з усіх знаків Зодіаку. Найлегше відрізнити Рака від інших, спостерігаючи за тим, як він йде до своєї мети. Справа в тому, що завзятість в його характері поєднується з обережністю, тому Рак не схильний відступати, але і не йде напролом. Його тактика – міркувати, зважувати всі «за» та «проти» і вичікувати, обираючи зручний момент. Зате коли такий момент настане, Рак навряд чи втратить свій шанс."],
    [title = "Лев" ,img = "https://sites.google.com/site/tvijgoroskop/_/rsrc/1472783029051/harakteristika-znakiv-zodiaku-1/923.jpg?height=224&width=400",description = "Людина, народжена під зодіакальним знаком Лева, чудово вміє себе подати і любить бути в центрі уваги. Найлегше знайти Лева на вечірці або на світському рауті його неважко впізнати по впевненому блиску в очах і неквапливій, навіть ледачій ході."],
    [title = "Діва" ,img = "https://sites.google.com/site/tvijgoroskop/_/rsrc/1472783028956/harakteristika-znakiv-zodiaku-1/435.jpg?height=224&width=400",description = "Народжені під зодіакальним знаком Діви – природжені поціновувачі чистоти. Вперше прийшовши в будинок, де господиня Діва, ви можете здивуватися тому, який порядок панує в цьому помешканні."],
    [title = "Терези" ,img = "https://sites.google.com/site/tvijgoroskop/_/rsrc/1472783028463/harakteristika-znakiv-zodiaku-1/1022.jpg?height=224&width=400",description = "Люди, що народилися під цим знаком, скромні, чарівні і доброзичливі. Вони не ображаються через дрібниці і намагаються не завдавати болю близьким, прагнення та бажання яких здатні вгадувати завдяки надзвичайно розвиненій інтуїції. Здатність Терезів передбачати майбутнє вражаюча, особливо в поєднанні з їх легким, не потьмареним містичними передчуттями характером. Вони здаються щасливими і веселими, завжди відкритими для спілкування, проте натура Терезів суперечлива, і в деякі періоди життя вони перетворюються на справжніх чудовиськ.        Темна сторона Терезів настільки ж неприваблива, наскільки приваблива світла частина їх особи. Стаючи часом примхливими, нервовими і просто злими, люди цього знаку ризикують втратити друзів, які звикли бачити їх зовсім іншими."],
    [title = "Скорпіон" ,img = "https://sites.google.com/site/tvijgoroskop/_/rsrc/1472783028783/harakteristika-znakiv-zodiaku-1/337.jpg?height=224&width=400",description = "Скорпіон – це воїн, до того ж, часто-густо, він кидається в бій, навіть не подумавши попередити про це оточуючих. Народженого під цим знаком Зодіаку ви дізнаєтеся відразу, як тільки поцікаветеся його думкою з якого-небудь питання. Що ж, ви самі цього хотіли: в своїй оцінці Скорпіон буде настільки ж безжалісний, як об"],
    [title = "Стрілець" ,img = "https://sites.google.com/site/tvijgoroskop/_/rsrc/1472783028834/harakteristika-znakiv-zodiaku-1/530.jpg?height=224&width=400",description = "Стрілець – це людина-свято в кращому сенсі цього слова. Цей життєрадісний знак Зодіаку майже завжди перебуває в прекрасному настрої і готовий підняти настрій оточуючим. Завдяки цьому в галасливих компаніях так легко відрізнити Стрільця від інших знаків зодіакального кола: зазвичай Стрілець знаходиться в самій гущавині людей, в самому центрі подій, і сипле жартами без перерви. Він володіє рідкісним талантом заражати всіх навколо своїми яскравими емоціями, у чому йому допомагають його легкість, оптимізм і вроджений дар красномовності."],
    [title = "Водолій" ,img = "https://sites.google.com/site/tvijgoroskop/_/rsrc/1472783028697/harakteristika-znakiv-zodiaku-1/1219.jpg?height=224&width=400",description = "Водолій – справжній художник, він здатний не тільки бачити світ у всьому його дивовижному різноманітті і повноті, але й уважно помічати при цьому найдрібніші деталі. Завдяки таким якостям, дізнатися народженого під цим знаком Зодіаку нескладно: фліртуючи з вами на вечірці, Водолій буде щиро захоплюватися вашою красою, роблячи вам самі захоплені компліменти. Але він же в перервах між компліментами не забуде повідомити і про те, що колір помади вам не підходить, а фасон сукні непогано б змінити. Такі всі Водолії, які вміють поєднувати дитячу безпосередність і цілісне сприйняття світу з холодним аналітичним розумом."],
    [title = "Риби" ,img = "https://sites.google.com/site/tvijgoroskop/_/rsrc/1472783028561/harakteristika-znakiv-zodiaku-1/190.jpg?height=224&width=400",description = "Мабуть, у всьому Зодіакальному колі немає знака загадковішого від Риб. Глибини, в яких вони плавають, воістину бездонні, і залишають мало шансів простим смертним в них заглянути. Їх особа може бути безтурботно спокійною, а поведінка демонструвати мрійливість, байдужість і навіть деяку лінь. Навіть при всьому бажанні оточуючим навряд чи вдасться вивести Риб з себе: ні релігія, ні звинувачення, ні бурхливі сцени не здатні по-справжньому позбавити їх глибокої внутрішньої гармонії."]
]
       switch(true){
        case day >= 21 && month == 3 || day<=20 && month == 4:
            index = arr[0]
            break
        case day >= 21 && month == 4 || day<=21 && month == 5:
            index = arr[1]
            break
        case day >= 22 && month == 5 || day<=22 && month == 6:
            index = arr[3]
        break
        case day >= 23 && month == 6 || day<=23 && month == 7:
            index = arr[4]
        break
        case day >= 24 && month == 7 || day<=24 && month == 8:
            index = arr[5]
        break
        case day >= 24 && month == 8 || day<=24 && month == 9:
            index = arr[6]
        break
        case day >= 24 && month == 9 || day<=24 && month == 10:
            index = arr[7]
        break
        case day >= 24 && month == 10 || day<=22 && month == 11:
            index = arr[8]
        break
        case day >= 23 && month == 11 || day<=21 && month == 12:
            index = arr[9]
        break
        case day >= 22 && month == 12 || day<=20 && month == 1:
            index = arr[2]
        break
        case day >= 21 && month == 1 || day<=19 && month == 2:
            index = arr[10]
        break
        case day >= 20 && month == 2 || day<=20 && month == 3:
            index = arr[11]
        break
    }
document.write(index)
