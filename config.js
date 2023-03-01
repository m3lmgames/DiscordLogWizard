module.exports = {
config:{
	
BotInfo: {
Token: "",
Bio: "M3LM Games System" // Bot bio
},

CommandOpt: {
Lang: "ar", // language
WebhooksName: "M3LM WEBHOOK", // webhook name
WebhooksAvatar: "https://cdn.discordapp.com/attachments/870376559742156810/1063897695498018836/512x512.png", // webhook avatar
FinalFileName: "LOGs-System.lua", // final file name and extension
},

Logs:{
RolesNum : 4, // roles number
Roles : [ // roles :
{name: "Server Owner", color: "#ff0000"},
{name: "Server Developer", color: "#000001"},
{name: "High Staff", color: "#fffa00"},
{name: "Staff", color: "#00d4ff"}
],
Categories : [ // categories :
{name: "اللوقات الحساسة"},
{name: "التحكم بالسيرفر"},
{name: "لوقات خاصة بالإدارة العليا"},
{name: "أوفلاين"},
{name: "لوقات عامة لجميع الإداريين"},
{name: "لوقات إدارية 2"},
{name: "لوقات الشكاوي"},
{name: "لوقات الشات"},
{name: "لوقات الأبطال الخارقين"},
{name: "لوقات عامة"}
],
},

LuaCodes:{ // Final required format
Table: `
URL1 = 'LOG1', -- ايداع بنكي
URL2 = 'LOG2', -- سحب بنكي
URL3 = 'LOG3', -- تحويل بنكي من البنك (هذا تابع لسكربت البنك الحصري وليس لبنك الفي ار بي العادي)
URL4 = 'LOG4', -- تحويل بنكي من الجوال من سكربت التحويل البنكي
URL5 = 'LOG5', -- ميوت للاعب بالشات
URL6 = 'LOG6', -- فك ميوت عن لاعب بالشات
URL7 = 'LOG7', -- سحب لاعب من الشات
URL8 = 'LOG8', -- انتقال للاعب من الشات
URL9 = 'LOG9', -- ايقاف الشات
URL10 = 'LOG10', -- فتح الشات
URL11 = 'LOG11', -- مسح الشات
URL12 = 'LOG12', -- رسالة خاصة بالشات
URL13 = 'LOG13', -- الشات العام
URL14 = 'LOG14', -- شات الإدارة
URL15 = 'LOG15', -- شات الشرطة
URL16 = 'LOG16', -- شات الصحة
URL17 = 'LOG17', -- نزول راتب
URL18 = 'LOG18', -- خصم ضريبة
URL19 = 'LOG19', -- شراء من السوبرماركت
URL20 = 'LOG20', -- طلبات الأنعاش من سكربت المتبقي للتحلل
URL21 = 'LOG21', -- محاولة فتح ديف تول
URL22 = 'LOG22', -- تعبئة بنزين
URL24 = 'LOG23', -- تسجيل دخول الابطال الخارقين
URL25 = 'LOG24', -- تسجيل خروج الابطال الخارقين
URL26 = 'LOG25', -- تتبع ابطال خارقين
URL27 = 'LOG26', -- اختفاء ابطال خارقين
URL28 = 'LOG27', -- رؤية ليلية ابطال خارقين
URL29 = 'LOG28', -- ركض سريع ابطال خارقين
URL30 = 'LOG29', -- قفزة عالية ابطال خارقين
URL31 = 'LOG30', -- اخذ درع ابطال خارقين
URL32 = 'LOG31', -- اخذ اسلحة ابطال خارقين
URL33 = 'LOG32', -- انزال سيارة ابطال خارقين
URL34 = 'LOG33', -- انزال ملابس ابطال خارقين
URL35 = 'LOG34', -- رؤية حرارية ابطال خارقين
URL36 = 'LOG35', -- انعاش ابطال خارقين
URL37 = 'LOG36', -- تعبئة اكل وشرب ابطال خارقين
URL38 = 'LOG37', -- لوق اختيار وظيفة
URL39 = 'LOG38', -- لوق القتل
URL40 = 'LOG39', -- دخول لاعب
URL41 = 'LOG40', -- خروج لاعب
URL42 = 'LOG41', -- الرسائل بين اللاعبين
URL43 = 'LOG42', -- ترخيص الأسلحة
URL44 = 'LOG43', -- انعاش عن بعد
URL45 = 'LOG44', -- انعاش الجميع
URL46 = 'LOG45', -- انعاش المحيط
URL47 = 'LOG46', -- انعاش نفسك
URL48 = 'LOG47', -- غسيل سيارة
URL49 = 'LOG48', -- ارسال موقع
URL50 = 'LOG49', -- قبول طلب ادمن
URL51 = 'LOG50', -- دخول ادمن الى السيرفر
URL52 = 'LOG51', -- خروج ادمن من السيرفر
URL53 = 'LOG52', -- تقييم إداري
URL56 = 'LOG55', -- الأستعلامات الإدارية
URL57 = 'LOG56', -- فك تخزين الأسلحة
URL59 = 'LOG58', -- Identification Error
URL60 = 'LOG59', -- ارسال ايميل
URL61 = 'LOG60', -- تفعيل لاعب
URL62 = 'LOG61', -- ازالة تفعيل
URL63 = 'LOG62', -- اعطاء رتبة
URL64 = 'LOG63', -- ازالة رتبة
URL65 = 'LOG64', -- طرد لاعب
URL66 = 'LOG65', -- باند لاعب
URL67 = 'LOG66', -- فك باند لاعب
URL68 = 'LOG67', -- اخذ احداثيات
URL69 = 'LOG68', -- سحب لاعب
URL70 = 'LOG69', -- انتقال الى لاعب
URL71 = 'LOG70', -- انتقال الى احداثيات
URL72 = 'LOG71', -- اخذ فلوس من الإدمنية
URL73 = 'LOG72', -- اخذ غرض من الأدمنية
URL74 = 'LOG73', -- طيران
URL75 = 'LOG74', -- ايقاف وعمل سبكتيت
URL76 = 'LOG75', -- الاعلانات
URL77 = 'LOG76', -- بيع بيت
URL78 = 'LOG77', -- شراء بيت
URL79 = 'LOG78', -- تبادل نقدي بين لاعبين
URL80 = "LOG79", -- تلويت
URL81 = "LOG80", -- سجن لاعب
URL82 = "LOG81", -- فك سجن عن لاعب
URL83 = "LOG82", -- رجوع لاعب الى السجن بعد خروجه من السيرفر
URL84 = "LOG83", -- المخالفات
URL85 = "LOG84", -- اظهار واخفاء عن شاشة اللاعبين
URL86 = "LOG85", -- اظهار واخفاء عن الشاشة
URL87 = "LOG86", -- حماية الاموال
URL88 = "LOG87", -- فتح واغلاق الابواب
URL89 = "LOG88", -- كلبشة لاعب
URL90 = "LOG89", -- حمل لاعب
URL91 = "LOG90", -- قبول طلبات الاتصال
URL92 = "LOG91", -- شكوى على قطاع
URL93 = "LOG92", -- شكوى على عصابة
URL94 = "LOG93", -- شكوى على مواطن
URL95 = "LOG94", -- شكوى على اداري
URL96 = "LOG95", -- لوق السينما
URL97 = "LOG96", -- تحلل سريع
URL98 = "LOG97", -- سكربت نقل لاعب
URL99 = "LOG98", -- سكربت رسبنة الاوبجكتات
URL100 = "LOG99", -- توزيع هدايا على اللاعبين
URL101 = "LOG100", -- الهدايا الي وصلت للاعبين
URL102 = "LOG101", -- التوب بلايرز
URL103 = "LOG102", -- فتح التواصل الاجتماعي
URL104 = "LOG103", -- الوظائف (شراء وبيع واستلام اموال)
URL105 = "LOG104", -- غسيل اموال
URL106 = "LOG105", -- بيع راس ومخ ويد
URL107 = "LOG106", -- اعصار من الجوال
URL108 = "LOG107", -- اعطاء في منيو
URL109 = "LOG108", -- ازالة في منيو
URL110 = "LOG109", -- تركيب سكربت
URL111 = "LOG110", -- تشغيل/اطفاء سكربت
URL112 = "LOG111", -- ريستارت لسكربت
URL113 = "LOG112", -- تركيب ماب/سيارة/سكن
URL114 = "LOG113", -- تركيب بنر دخول
URL115 = "LOG114", -- تركيب بنر اتصال
URL116 = "LOG115", -- نظام الحزم
URL117 = "LOG116", -- تغيير اسم السيرفر بالبحث
URL118 = "LOG117", -- تغيير ريجون السيرفر
URL119 = "LOG118", -- تغيير ديسكورد السيرفر بالبحث
URL120 = "LOG119", -- تغيير اسم صاحب السيرفر
URL121 = "LOG120", -- تركيب لايسن
URL122 = "LOG121", -- تركيب ون سنك
URL123 = "LOG122", -- حذف اسلحة لاعب
URL124 = "LOG123", -- حذف اسلحة جميع اللاعبين
URL125 = "LOG124", -- حذف مركبة من لاعب
URL126 = "LOG125", -- اعطاء مركبة للاعب
URL127 = "LOG126", -- اضافة رصيد
URL128 = "LOG127", -- مسح رصيد
URL129 = "LOG128", -- حذف رصيد بنك لاعب
URL130 = "LOG129", -- حذف رصيد كاش وبنك للاعب
URL131 = "LOG130", -- حذف مبلغ معين من لاعب
URL132 = "LOG131", -- مسح حقيبة لاعب
URL133 = "LOG132", -- مسح حقيبة جميع اللاعبين
URL134 = "LOG133", -- تغيير لوحة لاعب
URL135 = "LOG134", -- تغيير رقم هاتف لاعب
URL136 = "LOG135", -- تغيير ايدي لاعب
URL137 = "LOG136", -- اظهار البوتات
URL138 = "LOG137", -- اخفاء البوتات
URL139 = "LOG138", -- وضع زون 
URL140 = "LOG139", -- وضع كتابة
URL141 = "LOG140", -- تحديث ملفات فايف ام
URL142 = "LOG141", -- اضافة نقطة هيل
URL143 = "LOG142", -- اضافة نقطة تيليبورت
URL144 = "LOG143", -- اضافة محطة بنزين
URL145 = "LOG144", -- اضافة كراج مواطنين
URL146 = "LOG145", -- اضافة محطة غسيل
URL147 = "LOG146", -- اضافة سوبرماركت
URL148 = "LOG147", -- اضافة بنك
URL149 = "LOG148", -- اضافة محل ملابس
URL150 = "LOG149", -- اضافة رسائل تلقائية
URL151 = "LOG150", -- تسجيل دخول الادارة
URL152 = "LOG151", -- تسجيل خروج الادارة
URL153 = "LOG152", -- اخذ حزمة اسلحة
URL154 = "LOG153", -- اخراج ملابس لنفسه
URL155 = "LOG154", -- اخراج ملابس للاعب
URL156 = "LOG155", -- رسالة لكل الاداريين
URL157 = "LOG156", -- انزال سيارة
URL158 = "LOG157", -- سحب جميع الاداريين
URL159 = "LOG158", -- عمل سبكتيت
URL160 = "LOG159", -- اعطاء حزمة اسلحة للاعب 
URL161 = "LOG160", -- حذف السيارات بكل الماب
URL162 = "LOG161", -- حذف السيارات المحيطة
URL163 = "LOG162", -- رسبنة سيارة للاعب
URL164 = "LOG163", -- رسبنة سيارة للاعب ديفولت
URL165 = "LOG164", -- سجن لاعب اوفلاين
URL166 = "LOG165", -- باند لاعب اوفلاين
URL167 = "LOG166", -- اعطاء رتبة اوفلاين
URL168 = "LOG167", -- ازالة رتبة اوفلاين
URL169 = "LOG168", -- اعطاء غرض للاعب اوفلاين
URL170 = "LOG169", -- اعطاء فلوس للاعب بالكاش اوفلاين
URL171 = "LOG170", -- اعطاء فلوس للاعب بالبنك اوفلاين
URL172 = "LOG171", -- التعديل على الملفات
URL173 = "LOG172", -- سجن لاعب اداري
URL174 = "LOG173", -- اخراج لاعب اداري من السجن
URL175 = "LOG174", -- رجوع الى السجن للاعب اداري مسجون
URL176 = "LOG175", -- تعديل اسم رتبة
URL177 = "LOG176", -- سحب جميع اسماء الرتب
URL178 = "LOG177", -- تشفير اسم رتبة
URL179 = "LOG178", -- تغيير وزنية سيارة
URL180 = "LOG179", -- افراغ الحقيبة
URL181 = "LOG180", -- سجن الادارة
URL182 = "LOG181", -- فك سجن الادارة
URL183 = "LOG182", -- تفتيش السيارة
URL184 = "LOG183", -- اجبار دخول
URL185 = "LOG184", -- اجبار خروج
URL186 = "LOG185", -- استلام العتاد
URL187 = "LOG186", -- انعاش مواطن صحة
URL188 = "LOG187", -- الاكل والشرب
URL189 = "LOG188", -- اعطاء درع
URL190 = "LOG189", -- اعطاء غرض
URL191 = "LOG190", -- اعطاء هيل
URL192 = "LOG191", -- تخزين الاسلحة
URL193 = "LOG192", -- لبس درع
URL194 = "LOG193", -- رسالة لكل اللاعبين
URL195 = "LOG194", -- كلبشة عن بعد
URL196 = "LOG195", -- كلبشة وسحب عن بعد
URL197 = "LOG196", -- عتاد لمن حولك
URL198 = "LOG197", -- إعطاء نقود
URL199 = "LOG198", -- مصادرة الأسلحة
URL200 = "LOG199", -- الإستيلاء على الممنوعات
URL201 = "LOG200", -- رابط لوق تشغيل رابط سينما
URL202 = "LOG201", -- رابط لوق إضافة شاشة سينما
URL203 = "LOG202", -- رابط لوق حذف شاشة سينما
URL204 = "LOG203", -- تشغيل اعلان
URL205 = "LOG204", -- ايقاف اعلان
URL206 = "LOG205", -- اعلان خاص
URL207 = "LOG206", -- شراء سلاح
`
},
JsCodes:{
Table: [ // Channels with the format code, category, and authorized roles
{channelname: '↬اعصار من الجوال', LuaCode: "LOG106", Roles: ["Server Owner","Server Developer"], Category: "التحكم بالسيرفر"},
{channelname: '↬اعطاء في منيو', LuaCode: "LOG107", Roles: ["Server Owner","Server Developer"], Category: "التحكم بالسيرفر"},
{channelname: '↬ازالة في منيو', LuaCode: "LOG108", Roles: ["Server Owner","Server Developer"], Category: "التحكم بالسيرفر"},
{channelname: '↬تركيب سكربت', LuaCode: "LOG109", Roles: ["Server Owner","Server Developer"], Category: "التحكم بالسيرفر"},
{channelname: '↬تشغيل/اطفاء سكربت', LuaCode: "LOG110", Roles: ["Server Owner","Server Developer"], Category: "التحكم بالسيرفر"},
{channelname: '↬ريستارت لسكربت', LuaCode: "LOG111", Roles: ["Server Owner","Server Developer"], Category: "التحكم بالسيرفر"},
{channelname: '↬تركيب ماب/سيارة/سكن', LuaCode: "LOG112", Roles: ["Server Owner","Server Developer"], Category: "التحكم بالسيرفر"},
{channelname: '↬تركيب بنر دخول', LuaCode: "LOG113", Roles: ["Server Owner","Server Developer"], Category: "التحكم بالسيرفر"},
{channelname: '↬تركيب بنر اتصال', LuaCode: "LOG114", Roles: ["Server Owner","Server Developer"], Category: "التحكم بالسيرفر"},
{channelname: '↬نظام الحزم', LuaCode: "LOG115", Roles: ["Server Owner","Server Developer"], Category: "التحكم بالسيرفر"},
{channelname: '↬تغيير اسم السيرفر بالبحث', LuaCode: "LOG116", Roles: ["Server Owner","Server Developer"], Category: "التحكم بالسيرفر"},
{channelname: '↬تغيير ريجون السيرفر', LuaCode: "LOG117", Roles: ["Server Owner","Server Developer"], Category: "التحكم بالسيرفر"},
{channelname: '↬تغيير ديسكورد السيرفر بالبحث', LuaCode: "LOG118", Roles: ["Server Owner","Server Developer"], Category: "التحكم بالسيرفر"},
{channelname: '↬تغيير اسم صاحب السيرفر', LuaCode: "LOG119", Roles: ["Server Owner","Server Developer"], Category: "التحكم بالسيرفر"},
{channelname: '↬تركيب لايسن', LuaCode: "LOG120", Roles: ["Server Owner","Server Developer"], Category: "التحكم بالسيرفر"},
{channelname: '↬تركيب ون سنك', LuaCode: "LOG121", Roles: ["Server Owner","Server Developer"], Category: "التحكم بالسيرفر"},
{channelname: '↬تحديث ملفات فايف ام', LuaCode: "LOG140", Roles: ["Server Owner","Server Developer"], Category: "التحكم بالسيرفر"},
{channelname: '↬اضافة نقطة هيل', LuaCode: "LOG141", Roles: ["Server Owner","Server Developer"], Category: "التحكم بالسيرفر"},
{channelname: '↬اضافة نقطة تيليبورت', LuaCode: "LOG142", Roles: ["Server Owner","Server Developer"], Category: "التحكم بالسيرفر"},
{channelname: '↬اضافة محطة بنزين', LuaCode: "LOG143", Roles: ["Server Owner","Server Developer"], Category: "التحكم بالسيرفر"},
{channelname: '↬اضافة كراج مواطنين', LuaCode: "LOG144", Roles: ["Server Owner","Server Developer"], Category: "التحكم بالسيرفر"},
{channelname: '↬اضافة محطة غسيل', LuaCode: "LOG145", Roles: ["Server Owner","Server Developer"], Category: "التحكم بالسيرفر"},
{channelname: '↬اضافة سوبرماركت', LuaCode: "LOG146", Roles: ["Server Owner","Server Developer"], Category: "التحكم بالسيرفر"},
{channelname: '↬اضافة بنك', LuaCode: "LOG147", Roles: ["Server Owner","Server Developer"], Category: "التحكم بالسيرفر"},
{channelname: '↬اضافة محل ملابس', LuaCode: "LOG148", Roles: ["Server Owner","Server Developer"], Category: "التحكم بالسيرفر"},
{channelname: '↬اضافة رسائل تلقائية', LuaCode: "LOG149", Roles: ["Server Owner","Server Developer"], Category: "التحكم بالسيرفر"},
{channelname: '↬Identification Error', LuaCode: 'LOG58', Roles: ["Server Owner","Server Developer"], Category: "التحكم بالسيرفر"}, 
{channelname: '↬التعديل على الملفات', LuaCode: "LOG171", Roles: ["Server Owner","Server Developer"], Category: "التحكم بالسيرفر"},
{channelname: '↬تعديل اسم رتبة', LuaCode: "LOG175", Roles: ["Server Owner","Server Developer"], Category: "التحكم بالسيرفر"},
{channelname: '↬سحب جميع اسماء الرتب', LuaCode: "LOG176", Roles: ["Server Owner","Server Developer"], Category: "التحكم بالسيرفر"},
{channelname: '↬تشفير اسم رتبة', LuaCode: "LOG177", Roles: ["Server Owner","Server Developer"], Category: "التحكم بالسيرفر"},
{channelname: '↬تغيير وزنية سيارة', LuaCode: "LOG178", Roles: ["Server Owner","Server Developer"], Category: "التحكم بالسيرفر"},


{channelname: '↬الاستعلامات الادارية', LuaCode: 'LOG55', Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"}, 
{channelname: '↬محاولة فتح ديف تول', LuaCode: 'LOG21', Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"},
{channelname: '↬دخول ادمن الى السيرفر', LuaCode: 'LOG50', Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"}, 
{channelname: '↬خروج ادمن من السيرفر', LuaCode: 'LOG51', Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"}, 
{channelname: '↬تقييم إداري', LuaCode: 'LOG52', Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"}, 
{channelname: '↬ارسال ايميل', LuaCode: 'LOG59', Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"}, 
{channelname: '↬تفعيل لاعب', LuaCode: 'LOG60', Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"}, 
{channelname: '↬ازالة تفعيل', LuaCode: 'LOG61', Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"}, 
{channelname: '↬اعطاء رتبة', LuaCode: 'LOG62', Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"}, 
{channelname: '↬ازالة رتبة', LuaCode: 'LOG63', Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"}, 
{channelname: '↬طرد لاعب', LuaCode: 'LOG64', Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"}, 
{channelname: '↬باند لاعب', LuaCode: 'LOG65', Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"}, 
{channelname: '↬فك باند لاعب', LuaCode: 'LOG66', Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"}, 
{channelname: '↬حماية الاموال', LuaCode: "LOG86", Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"},
{channelname: '↬لوق السينما', LuaCode: "LOG95", Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"},
{channelname: '↬توزيع هدايا على اللاعبين', LuaCode: "LOG99", Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"},
{channelname: '↬الهدايا الي وصلت للاعبين', LuaCode: "LOG100", Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"},
{channelname: '↬التوب بلايرز', LuaCode: "LOG101", Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"},
{channelname: '↬حذف اسلحة لاعب', LuaCode: "LOG122", Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"},
{channelname: '↬حذف اسلحة جميع اللاعبين', LuaCode: "LOG123", Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"},
{channelname: '↬حذف مركبة من لاعب', LuaCode: "LOG124", Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"},
{channelname: '↬اعطاء مركبة للاعب', LuaCode: "LOG125", Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"},
{channelname: '↬اضافة رصيد', LuaCode: "LOG126", Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"},
{channelname: '↬مسح رصيد', LuaCode: "LOG127", Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"},
{channelname: '↬حذف رصيد بنك لاعب', LuaCode: "LOG128", Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"},
{channelname: '↬حذف رصيد كاش وبنك للاعب', LuaCode: "LOG129", Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"},
{channelname: '↬حذف مبلغ معين من لاعب', LuaCode: "LOG130", Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"},
{channelname: '↬مسح حقيبة لاعب', LuaCode: "LOG131", Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"},
{channelname: '↬مسح حقيبة جميع اللاعبين', LuaCode: "LOG132", Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"},
{channelname: '↬تغيير لوحة لاعب', LuaCode: "LOG133", Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"},
{channelname: '↬تغيير رقم هاتف لاعب', LuaCode: "LOG134", Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"},
{channelname: '↬تغيير ايدي لاعب', LuaCode: "LOG135", Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"},
{channelname: '↬اظهار البوتات', LuaCode: "LOG136", Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"},
{channelname: '↬اخفاء البوتات', LuaCode: "LOG137", Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"},
{channelname: '↬وضع زون', LuaCode: "LOG138", Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"},
{channelname: '↬وضع كتابة', LuaCode: "LOG139", Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"},
{channelname: '↬تسجيل دخول الادارة', LuaCode: "LOG150", Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"},
{channelname: '↬تسجيل خروج الادارة', LuaCode: "LOG151", Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"},
{channelname: '↬رسالة لكل الاداريين', LuaCode: "LOG155", Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"},
{channelname: '↬انزال سيارة', LuaCode: "LOG156", Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"},
{channelname: '↬سحب جميع الاداريين', LuaCode: "LOG157", Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"},
{channelname: '↬عمل سبكتيت', LuaCode: "LOG158", Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"},
{channelname: '↬حذف السيارات بكل الماب', LuaCode: "LOG160", Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"},
{channelname: '↬رسبنة سيارة للاعب', LuaCode: "LOG162", Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"},
{channelname: '↬رسبنة سيارة للاعب ديفولت', LuaCode: "LOG163", Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"},
{channelname: '↬سجن لاعب اداري', LuaCode: "LOG172", Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"},
{channelname: '↬اخراج لاعب اداري من السجن', LuaCode: "LOG173", Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"},
{channelname: '↬رجوع الى السجن للاعب اداري مسجون', LuaCode: "LOG174", Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"},
{channelname: '↬رسالة لكل اللاعبين', LuaCode: "LOG193", Roles: ["Server Owner","Server Developer","High Staff"], Category: "لوقات خاصة بالإدارة العليا"},


{channelname: '↬سجن لاعب اوفلاين', LuaCode: "LOG164", Roles: ["Server Owner","Server Developer","High Staff"], Category: "أوفلاين"},
{channelname: '↬باند لاعب اوفلاين', LuaCode: "LOG165", Roles: ["Server Owner","Server Developer","High Staff"], Category: "أوفلاين"},
{channelname: '↬اعطاء رتبة اوفلاين', LuaCode: "LOG166", Roles: ["Server Owner","Server Developer","High Staff"], Category: "أوفلاين"},
{channelname: '↬ازالة رتبة اوفلاين', LuaCode: "LOG167", Roles: ["Server Owner","Server Developer","High Staff"], Category: "أوفلاين"},
{channelname: '↬اعطاء غرض للاعب اوفلاين', LuaCode: "LOG168", Roles: ["Server Owner","Server Developer","High Staff"], Category: "أوفلاين"},
{channelname: '↬اعطاء فلوس للاعب بالكاش اوفلاين', LuaCode: "LOG169", Roles: ["Server Owner","Server Developer","High Staff"], Category: "أوفلاين"},
{channelname: '↬اعطاء فلوس للاعب بالبنك اوفلاين', LuaCode: "LOG170", Roles: ["Server Owner","Server Developer","High Staff"], Category: "أوفلاين"},


{channelname: '↬ايداع بنكي', LuaCode: 'LOG1', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"},
{channelname: '↬سحب بنكي', LuaCode: 'LOG2', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"},
{channelname: '↬تحويل بنكي من البنك', LuaCode: 'LOG3', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"},
{channelname: '↬تحويل بنكي من الجوال', LuaCode: 'LOG4', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"},
{channelname: '↬انعاش عن بعد', LuaCode: 'LOG43', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"},
{channelname: '↬انعاش الجميع', LuaCode: 'LOG44', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"},
{channelname: '↬انعاش المحيط', LuaCode: 'LOG45', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"},
{channelname: '↬انعاش نفسك', LuaCode: 'LOG46', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"},
{channelname: '↬قبول طلب ادمن', LuaCode: 'LOG49', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"},
{channelname: '↬اخذ احداثيات', LuaCode: 'LOG67', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"}, 
{channelname: '↬سحب لاعب', LuaCode: 'LOG68', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"}, 
{channelname: '↬انتقال الى لاعب', LuaCode: 'LOG69', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"}, 
{channelname: '↬اخذ فلوس من الإدمنية', LuaCode: 'LOG71', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"}, 
{channelname: '↬اخذ غرض من الأدمنية', LuaCode: 'LOG72', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"}, 
{channelname: '↬طيران', LuaCode: 'LOG73', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"}, 
{channelname: '↬ايقاف وعمل سبكتيت', LuaCode: 'LOG74', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"}, 
{channelname: '↬سجن لاعب', LuaCode: "LOG80", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"},
{channelname: '↬فك سجن عن لاعب', LuaCode: "LOG81", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"},
{channelname: '↬رجوع لاعب الى السجن', LuaCode: "LOG82", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"},
{channelname: '↬المخالفات', LuaCode: "LOG83", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"},
{channelname: '↬اظهار واخفاء عن شاشة اللاعبين', LuaCode: "LOG84", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"},
{channelname: '↬اظهار واخفاء عن الشاشة', LuaCode: "LOG85", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"},
{channelname: '↬فتح واغلاق الابواب', LuaCode: "LOG87", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"},
{channelname: '↬كلبشة لاعب', LuaCode: "LOG88", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"},
{channelname: '↬حمل لاعب', LuaCode: "LOG89", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"},
{channelname: '↬تحلل سريع', LuaCode: "LOG96", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"},
{channelname: '↬سكربت نقل لاعب', LuaCode: "LOG97", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"},
{channelname: '↬رسبنة الاوبجكتات', LuaCode: "LOG98", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"},
{channelname: '↬فتح التواصل الاجتماعي', LuaCode: "LOG102", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"},
{channelname: '↬الوظائف (شراء وبيع واستلام اموال)', LuaCode: "LOG103", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"},
{channelname: '↬غسيل اموال', LuaCode: "LOG104", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"},
{channelname: '↬بيع راس ومخ ويد', LuaCode: "LOG105", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"},
{channelname: '↬اخذ حزمة اسلحة', LuaCode: "LOG152", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"},
{channelname: '↬اخراج ملابس لنفسه', LuaCode: "LOG153", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"},
{channelname: '↬اخراج ملابس للاعب', LuaCode: "LOG154", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"},
{channelname: '↬اعطاء حزمة اسلحة للاعب', LuaCode: "LOG159", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"},
{channelname: '↬حذف السيارات المحيطة', LuaCode: "LOG161", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"},
{channelname: '↬افراغ الحقيبة', LuaCode: "LOG179", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"},
{channelname: '↬سجن الادارة', LuaCode: "LOG180", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"},
{channelname: '↬فك سجن الادارة', LuaCode: "LOG181", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"},
{channelname: '↬تفتيش السيارة', LuaCode: "LOG182", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"},
{channelname: '↬اجبار دخول', LuaCode: "LOG183", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"},
{channelname: '↬اجبار خروج', LuaCode: "LOG184", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"},
{channelname: '↬استلام العتاد', LuaCode: "LOG185", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"},
{channelname: '↬انعاش مواطن صحة', LuaCode: "LOG186", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"},
{channelname: '↬الاكل والشرب', LuaCode: "LOG187", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"},
{channelname: '↬اعطاء درع', LuaCode: "LOG188", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"},
{channelname: '↬اعطاء غرض', LuaCode: "LOG189", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"},
{channelname: '↬اعطاء هيل', LuaCode: "LOG190", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة لجميع الإداريين"},

{channelname: '↬كلبشة عن بعد', LuaCode: "LOG194", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات إدارية 2"},
{channelname: '↬كلبشة وسحب عن بعد', LuaCode: "LOG195", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات إدارية 2"},
{channelname: '↬عتاد لمن حولك', LuaCode: "LOG196", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات إدارية 2"},
{channelname: '↬إعطاء نقود', LuaCode: "LOG197", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات إدارية 2"},
{channelname: '↬مصادرة الأسلحة', LuaCode: "LOG198", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات إدارية 2"},
{channelname: '↬الإستيلاء على الممنوعات', LuaCode: "LOG199", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات إدارية 2"},

{channelname: '↬شكوى على قطاع', LuaCode: "LOG91", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات الشكاوي"},
{channelname: '↬شكوى على عصابة', LuaCode: "LOG92", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات الشكاوي"},
{channelname: '↬شكوى على مواطن', LuaCode: "LOG93", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات الشكاوي"},
{channelname: '↬شكوى على اداري', LuaCode: "LOG94", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات الشكاوي"},

{channelname: '↬ميوت للاعب بالشات', LuaCode: 'LOG5', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات الشات"},
{channelname: '↬فك ميوت عن لاعب بالشات', LuaCode: 'LOG6', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات الشات"},
{channelname: '↬سحب لاعب من الشات', LuaCode: 'LOG7', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات الشات"},
{channelname: '↬انتقال للاعب بالشات', LuaCode: 'LOG8', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات الشات"},
{channelname: '↬ايقاف الشات', LuaCode: 'LOG9', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات الشات"},
{channelname: '↬فتح الشات', LuaCode: 'LOG10', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات الشات"},
{channelname: '↬مسح الشات', LuaCode: 'LOG11', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات الشات"},
{channelname: '↬رسالة خاصة بالشات', LuaCode: 'LOG12', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات الشات"},
{channelname: '↬الشات العام', LuaCode: 'LOG13', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات الشات"},
{channelname: '↬شات الادارة', LuaCode: 'LOG14', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات الشات"},
{channelname: '↬شات الشرطة', LuaCode: 'LOG15', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات الشات"},
{channelname: '↬شات الصحة', LuaCode: 'LOG16', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات الشات"},

{channelname: '↬تسجيل ابطال خارقين', LuaCode: 'LOG23', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات الأبطال الخارقين"},
{channelname: '↬خروج ابطال خارقين', LuaCode: 'LOG24', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات الأبطال الخارقين"},
{channelname: '↬تتبع ابطال خارقين', LuaCode: 'LOG25', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات الأبطال الخارقين"},
{channelname: '↬اختفاء ابطال خارقين', LuaCode: 'LOG26', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات الأبطال الخارقين"},
{channelname: '↬رؤية ليلية ابطال خارقين', LuaCode: 'LOG27', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات الأبطال الخارقين"},
{channelname: '↬ركض سريع ابطال خارقين', LuaCode: 'LOG28', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات الأبطال الخارقين"},
{channelname: '↬قفزة عالية ابطال خارقين', LuaCode: 'LOG29', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات الأبطال الخارقين"},
{channelname: '↬اخذ درع ابطال خارقين', LuaCode: 'LOG30', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات الأبطال الخارقين"},
{channelname: '↬اخذ اسلحة ابطال خارقين', LuaCode: 'LOG31', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات الأبطال الخارقين"},
{channelname: '↬انزال سيارة ابطال خارقين', LuaCode: 'LOG32', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات الأبطال الخارقين"},
{channelname: '↬انزال ملابس ابطال خارقين', LuaCode: 'LOG33', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات الأبطال الخارقين"},
{channelname: '↬رؤية حرارية ابطال خارقين', LuaCode: 'LOG34', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات الأبطال الخارقين"},
{channelname: '↬انعاش ابطال خارقين', LuaCode: 'LOG35', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات الأبطال الخارقين"},
{channelname: '↬تعبئة اكل ابطال خارقين', LuaCode: 'LOG36', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات الأبطال الخارقين"},




{channelname: '↬نزول راتب', LuaCode: 'LOG17', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة"},
{channelname: '↬خصم ضريبة', LuaCode: 'LOG18', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة"},
{channelname: '↬شراء من السوبرماركت', LuaCode: 'LOG19', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة"},
{channelname: '↬طلبات الانعاش', LuaCode: 'LOG20', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة"},
{channelname: '↬تعبئة بنزين', LuaCode: 'LOG22', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة"},
{channelname: '↬اختيار وظيفة', LuaCode: 'LOG37', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة"},
{channelname: '↬القتل', LuaCode: 'LOG38', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة"},
{channelname: '↬دخول لاعب', LuaCode: 'LOG39', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة"},
{channelname: '↬خروج لاعب', LuaCode: 'LOG40', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة"},
{channelname: '↬الرسائل بين اللاعبين', LuaCode: 'LOG41', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة"},
{channelname: '↬ترخيص الاسلحة', LuaCode: 'LOG42', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة"},
{channelname: '↬غسيل سيارة', LuaCode: 'LOG47', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة"},
{channelname: '↬ارسال موقع', LuaCode: 'LOG48', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة"},
{channelname: '↬فك تخزين الاسلحة', LuaCode: 'LOG56', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة"}, 
{channelname: '↬انتقال الى احداثيات', LuaCode: 'LOG70', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة"}, 
{channelname: '↬الاعلانات', LuaCode: 'LOG75', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة"}, 
{channelname: '↬بيع بيت', LuaCode: 'LOG76', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة"}, 
{channelname: '↬شراء بيت', LuaCode: 'LOG77', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة"}, 
{channelname: '↬تبادل نقدي بين لاعبين', LuaCode: 'LOG78', Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة"}, 	
{channelname: '↬تلويت', LuaCode: "LOG79", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة"},
{channelname: '↬قبول طلبات الاتصال', LuaCode: "LOG90", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة"},
{channelname: '↬تخزين الاسلحة', LuaCode: "LOG191", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة"},
{channelname: '↬لبس درع', LuaCode: "LOG192", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة"},
{channelname: '↬تشغيل رابط سينما', LuaCode: "LOG200", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة"},
{channelname: '↬إضافة شاشة سينما', LuaCode: "LOG201", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة"},
{channelname: '↬حذف شاشة سينما', LuaCode: "LOG202", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة"},
{channelname: '↬تشغيل اعلان', LuaCode: "LOG203", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة"},
{channelname: '↬ايقاف اعلان', LuaCode: "LOG204", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة"},
{channelname: '↬اعلان خاص', LuaCode: "LOG205", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة"},
{channelname: '↬شراء سلاح', LuaCode: "LOG206", Roles: ["Server Owner","Server Developer","High Staff","Staff"], Category: "لوقات عامة"},
]
	   
}
}
}