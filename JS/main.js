var BHC = ['갈비레오', '날개 치레카', '닭날개 후라이드', '마라칸', '맛초킹', '매운맛 양념치킨', '맵스터', '바삭클', '붐바스틱', '뿌링클 HOT', '뿌링클', '소떡강정', '소이바베큐', '순살 마라칸', '순살 맛초킹', '순살 맵스터', '순살 뿌링클 HOT', '순살 뿌링클', '순살 치레카', '순살 치하오', '순살 커리퀸', '순살바삭클', '순살소이바베큐', '스윗텐더', '양념치킨', '치레카', '치하오', '커리퀸', '해바라기 닭다리 후라이드 치킨', '해바라기 핫후라이드 치킨', '해바라기 후라이드 치킨', 'NULL', 'NULL', 'NULL', 'NULL'];
var 교촌치킨 = ['교촌라이스', '교촌레드스틱', '교촌레드오리지널', '교촌레드윙', '교촌레드콤보', '교촌반반스틱', '교촌반반오리지널', '교촌반반윙', '교촌반반콤보', '교촌살살', '교촌소이살살', '교촌스틱', '교촌오리지널', '교촌윙', '교촌콤보', '교촌허니순살', '교촌허니스틱', '교촌허니오리지널', '교촌허니콤보', '교촌후라이드'];
var BBQ = ['극한왕갈비', '마라핫', '바삭칸 양념', '바삭칸', '빠리', '소이 갈릭스', '순살크래커', '스모크', '시크릿양념', '써프라이드', '자메이카 통다리', '치즐링', '허니버터갈릭스', '황금올리브', '황금올리브핫윙'];
var 맘스터치 = ['강정콤보', '마살라 윙', '마살라 치킨', '마살라 텐더', '불갈비 순살뿌치', '불갈비뿌치', '불사윙', '불사치킨', '불사텐더', '순살강정', '순살치킨', '양념치킨', '어니언치즈 순살뿌치', '어니언치즈뿌치', '조청강정', '조청치킨', '찜햇닭 강정', '찜햇닭 윙', '찜햇닭', '치킨강정', '치파오', '치파오치킨' ,'케이준윙', '핫칠리 순살뿌치', '핫칠리뿌치', '후라이드닭다리', '후라이드치킨,핫후라이드치킨', '후레이크 갈릭치킨', '후레이크 핫치킨', 'NULL'];
var 처갓집 = ['THE.화이트치킨 골드치즈', 'THE.화이트치킨 레몬파채', 'THE.화이트치킨 슈프림', 'THE.화이트치킨 파인유자', '닭강정', '레몬파닭치킨', '매운불 양념치킨', '반반치킨', '슈프림 양념치킨', '슈프림골드 양념치킨', '와락윙', '와락치킨', '치즈슈프림 양념치킨', '치폴레 양념치킨', '핫슈프림 양념치킨', '허니올리고당야채 양념치킨', '후라이드치킨', '훈제치킨', 'NULL', 'NULL'];
var 굽네치킨 = ['갈비천왕', '고추바사삭', '그릴 후랑크', '딥치즈', '반반', '반반1', '반반2', '볼케이노 모짜렐라', '볼케이노 쌀떡볶이', '볼케이노', '스윗 볼케이노', '양념', '오리지널 콤보', '오리지널', '핫 갈비천왕', '허니멜로', 'NULL', 'NULL', 'NULL', 'NULL']

function go(str){
	if (str == '맘스터치'){
		window.open("http://www.momstouch.co.kr/sub/company/company_05.html");
	}
	else if (str == '교촌치킨'){
		window.open("http://www.kyochon.com/main/");
	}
	else if (str == 'BBQ'){
		window.open("https://m.bbq.co.kr/main.asp");
	}
	else if (str == 'BHC'){
		window.open("https://www.bhc.co.kr/");
	}
	else if (str == '처갓집'){
		window.open("http://www.cheogajip.co.kr/");
	}
	else if (str == '굽네치킨'){
		window.open("http://goobne.co.kr/");
	}
}

function appear(str){
	if (str == 'BHC'||str == '교촌치킨'||str == 'BBQ'||str == '맘스터치'||str == '처갓집'||str == '굽네치킨')
		document.getElementsByTagName("section")[0] = tableCreate(str);
	else if (str == 'ranking') {
		var x = document.getElementById("trash_1");
		x.src = "../../IMG/치킨 랭킹.png"; x.width = 408;
	}		
}

function hl(str1, str2){
	if (str2 == 'NULL')
		return 0;
	if (str1 == "BHC")
		window.open("../BHC/" + str2 + ".html");
	else if (str1 == "교촌치킨")
		window.open("../교촌치킨/" + str2 + ".html");
	else if (str1 == "BBQ")
		window.open("../BBQ/" + str2 + ".html");
	else if (str1 == "맘스터치")
		window.open("../맘스터치/맘스터치 " + str2 + ".html");
	else if (str1 == '처갓집')
		window.open("../처갓집/처갓집양념치킨 " + str2 + ".html");
	else if (str1 == '굽네치킨')
		window.open("../굽네치킨/굽네 " + str2 + ".html");
}

function tableCreate(str) {
	var body = document.getElementsByTagName('body')[0];
	var section = document.getElementsByTagName('section')[0];
	var table_1 = document.getElementsByTagName('table')[1];
	section.innerHTML = "";
	table_1.remove();
	if (str != 'BHC'&&str != '교촌치킨'&&str != 'BBQ'&&str != '맘스터치'&&str != '처갓집'&&str != '굽네치킨') {
		section.innerHTML = "<strong><center>준비중입니다..</center></strong>";
		var tbl = document.createElement('table');
		body.appendChild(tbl);
		return 0;
	}
	var tbl = document.createElement('table');
	tbl.style.width = '251px';
    tbl.style.height = '300px';
	tbl.setAttribute('border', '0');
	tbl.setAttribute('cellspacing', '0');
	var tbdy = document.createElement('tbody');

	if (str == 'BHC'){
		var trash = (BHC.length) / 5;
		for (var i = 0; i < trash; i++) {
			var tr = document.createElement('tr');
			for (var j = 0; j < 6; j++) {
				var td = document.createElement('td');
				var oImg = document.createElement('img');
				if (j == 0) {
					oImg.setAttribute('src', '../../IMG/NULL.png');
					oImg.width = '100';
					oImg.height = '250';
					td.appendChild(oImg);
					tr.appendChild(td);
					continue;
				}
				var k = 5 * i + j - 1;
				oImg.setAttribute('src', '../../IMG/BHC/' + BHC[k] + '.png');
				if (BHC[k] == 'NULL') oImg.setAttribute('src', '../../IMG/NULL.png');
				oImg.setAttribute('alt', k + BHC[k]);
				oImg.setAttribute('onclick', 'hl("BHC", ' + "'" + BHC[k] + "'" + ')');
				oImg.width = '250';
				oImg.height = '250';
				if (BHC[k] == 'NULL') var chickText = document.createTextNode(" ");
				else var chickText = document.createTextNode("ᅠ" + BHC[k]);
				td.appendChild(oImg);
				td.appendChild(chickText);
				tr.appendChild(td);
			}
			tbdy.appendChild(tr);
		}
		tbl.appendChild(tbdy);
		body.appendChild(tbl);
		trash1 = 0;
		return 0;
	}
	
	if (str == '교촌치킨'){
		var trash = (교촌치킨.length) / 5;
		for (var i = 0; i < trash; i++) {
			var tr = document.createElement('tr');
			for (var j = 0; j < 6; j++) {
				var td = document.createElement('td');
				var oImg = document.createElement('img');
				if (j == 0) {
					oImg.setAttribute('src', '../../IMG/NULL.png');
					oImg.width = '100';
					oImg.height = '250';
					td.appendChild(oImg);
					tr.appendChild(td);
					continue;
				}
				var k = 5 * i + j - 1;
				oImg.setAttribute('src', '../../IMG/교촌치킨/' + 교촌치킨[k] + '.jpg');
				if (교촌치킨[k] == 'NULL') oImg.setAttribute('src', '../../IMG/NULL.png');
				oImg.setAttribute('alt', k + 교촌치킨[k]);
				oImg.setAttribute('onclick', 'hl("교촌치킨", ' + "'" + 교촌치킨[k] + "'" + ')');
				oImg.width = '250';
				oImg.height = '250';
				if (교촌치킨[k] == 'NULL') var chickText = document.createTextNode(" ");
				else var chickText = document.createTextNode("ᅠ" + 교촌치킨[k]);
				td.appendChild(oImg);
				td.appendChild(chickText);
				tr.appendChild(td);
			}
			tbdy.appendChild(tr);
		}
		tbl.appendChild(tbdy);
		body.appendChild(tbl);
		trash1 = 0;
		return 0;
	}
		
	if (str == 'BBQ'){
		var trash = (BBQ.length) / 5;
		for (var i = 0; i < trash; i++) {
			var tr = document.createElement('tr');
			for (var j = 0; j < 6; j++) {
				var td = document.createElement('td');
				var oImg = document.createElement('img');
				if (j == 0) {
					oImg.setAttribute('src', '../../IMG/NULL.png');
					oImg.width = '100';
					oImg.height = '250';
					td.appendChild(oImg);
					tr.appendChild(td);
					continue;
				}
				var k = 5 * i + j - 1;
				oImg.setAttribute('src', '../../IMG/BBQ/' + BBQ[k] + '.PNG');
				if (BBQ[k] == 'NULL') oImg.setAttribute('src', '../../IMG/NULL.png');
				oImg.setAttribute('alt', k + BBQ[k]);
				oImg.setAttribute('onclick', 'hl("BBQ", ' + "'" + BBQ[k] + "'" + ')');
				oImg.width = '250';
				oImg.height = '250';
				if (BBQ[k] == 'NULL') var chickText = document.createTextNode(" ");
				else var chickText = document.createTextNode("ᅠ" + BBQ[k]);
				td.appendChild(oImg);
				td.appendChild(chickText);
				tr.appendChild(td);
			}
			tbdy.appendChild(tr);
		}
		tbl.appendChild(tbdy);
		body.appendChild(tbl);
		trash1 = 0;
		return 0;
	}
		
	if (str == '맘스터치'){
		var trash = (맘스터치.length) / 5;
		for (var i = 0; i < trash; i++) {
			var tr = document.createElement('tr');
			for (var j = 0; j < 6; j++) {
				var td = document.createElement('td');
				var oImg = document.createElement('img');
				if (j == 0) {
					oImg.setAttribute('src', '../../IMG/NULL.png');
					oImg.width = '100';
					oImg.height = '250';
					td.appendChild(oImg);
					tr.appendChild(td);
					continue;
				}
				var k = 5 * i + j - 1;
				oImg.setAttribute('src', '../../IMG/맘스터치/' + 맘스터치[k] + '.jpg');
				if (맘스터치[k] == 'NULL') oImg.setAttribute('src', '../../IMG/NULL.png');
				oImg.setAttribute('alt', k + 맘스터치[k]);
				oImg.setAttribute('onclick', 'hl("맘스터치", ' + "'" + 맘스터치[k] + "'" + ')');
				oImg.width = '250';
				oImg.height = '250';
				if (맘스터치[k] == 'NULL') var chickText = document.createTextNode(" ");
				else var chickText = document.createTextNode("ᅠ" + 맘스터치[k]);
				td.appendChild(oImg);
				td.appendChild(chickText);
				tr.appendChild(td);
			}
			tbdy.appendChild(tr);
		}
		tbl.appendChild(tbdy);
		body.appendChild(tbl);
		trash1 = 0;
		return 0;
	}
		
	if (str == '처갓집'){
		var trash = (처갓집.length) / 5;
		for (var i = 0; i < trash; i++) {
			var tr = document.createElement('tr');
			for (var j = 0; j < 6; j++) {
				var td = document.createElement('td');
				var oImg = document.createElement('img');
				if (j == 0) {
					oImg.setAttribute('src', '../../IMG/NULL.png');
					oImg.width = '100';
					oImg.height = '250';
					td.appendChild(oImg);
					tr.appendChild(td);
					continue;
				}
				var k = 5 * i + j - 1;
				oImg.setAttribute('src', '../../IMG/처갓집/' + 처갓집[k] + '.jpg');
				if (처갓집[k] == 'NULL') oImg.setAttribute('src', '../../IMG/NULL.png');
				oImg.setAttribute('alt', k + 처갓집[k]);
				oImg.setAttribute('onclick', 'hl("처갓집", ' + "'" + 처갓집[k] + "'" + ')');
				oImg.width = '250';
				oImg.height = '250';
				if (처갓집[k] == 'NULL') var chickText = document.createTextNode(" ");
				else var chickText = document.createTextNode("ᅠ" + 처갓집[k]);
				td.appendChild(oImg);
				td.appendChild(chickText);
				tr.appendChild(td);
			}
			tbdy.appendChild(tr);
		}
		tbl.appendChild(tbdy);
		body.appendChild(tbl);
		trash1 = 0;
		return 0;
	}
	
	if (str == '굽네치킨'){
		var trash = (굽네치킨.length) / 5;
		for (var i = 0; i < trash; i++) {
			var tr = document.createElement('tr');
			for (var j = 0; j < 6; j++) {
				var td = document.createElement('td');
				var oImg = document.createElement('img');
				if (j == 0) {
					oImg.setAttribute('src', '../../IMG/NULL.png');
					oImg.width = '100';
					oImg.height = '250';
					td.appendChild(oImg);
					tr.appendChild(td);
					continue;
				}
				var k = 5 * i + j - 1;
				oImg.setAttribute('src', '../../IMG/굽네치킨/굽네 ' + 굽네치킨[k] + '.jpg');
				if (굽네치킨[k] == 'NULL') oImg.setAttribute('src', '../../IMG/NULL.png');
				oImg.setAttribute('alt', k + 굽네치킨[k]);
				oImg.setAttribute('onclick', 'hl("굽네치킨", ' + "'" + 굽네치킨[k] + "'" + ')');
				oImg.width = '250';
				oImg.height = '250';
				if (굽네치킨[k] == 'NULL') var chickText = document.createTextNode(" ");
				else var chickText = document.createTextNode("ᅠ" + 굽네치킨[k]);
				td.appendChild(oImg);
				td.appendChild(chickText);
				tr.appendChild(td);
			}
			tbdy.appendChild(tr);
		}
		tbl.appendChild(tbdy);
		body.appendChild(tbl);
		trash1 = 0;
		return 0;
	}
}

function search1(){
	var searchresult1 = new Array();
	var searchresult2 = new Array();
	var searchresult3 = new Array();
	var searchresult4 = new Array();
	var searchresult5 = new Array();
	var searchresult6 = new Array();
	var sr = document.getElementById('trash1').value;
	
	for (var i=0;i<(BHC.length);i++){
		var trash2 = BHC[i].search(sr);
		if (trash2 != -1) searchresult1.push(BHC[i]);
	}
	for (var i=0;i<(교촌치킨.length);i++){
		var trash2 = 교촌치킨[i].search(sr);
		if (trash2 != -1) searchresult2.push(교촌치킨[i]);
	}
	for (var i=0;i<(BBQ.length);i++){
		var trash2 = BBQ[i].search(sr);
		if (trash2 != -1) searchresult3.push(BBQ[i]);
	}
	for (var i=0;i<(맘스터치.length);i++){
		var trash2 = 맘스터치[i].search(sr);
		if (trash2 != -1) searchresult4.push(맘스터치[i]);
	}
	for (var i=0;i<(처갓집.length);i++){
		var trash2 = 처갓집[i].search(sr);
		if (trash2 != -1) searchresult5.push(처갓집[i]);
	}
	for (var i=0;i<(굽네치킨.length);i++){
		var trash2 = 굽네치킨[i].search(sr);
		if (trash2 != -1) searchresult6.push(굽네치킨[i]);
	}
	
	var body = document.getElementsByTagName('body')[0];
	var section = document.getElementsByTagName('section')[0];
	var table_1 = document.getElementsByTagName('table')[1];
	section.innerHTML = "";
	table_1.remove();
	var tbl = document.createElement('table');
	tbl.style.width = '251px';
    tbl.style.height = '300px';
	tbl.setAttribute('border', '0px solid white');
	tbl.setAttribute('cellspacing', '0');
	tbl.setAttribute('class', 'see1');
	var tbdy = document.createElement('tbody');
	
	if (sr == '일석이鳥') {
		var tr = document.createElement('tr');
		var td = document.createElement('td');
		var oImg = document.createElement('img');
		oImg.setAttribute('src', '../../IMG/icon.ico');
		oImg.setAttribute('alt', '일석이鳥');
		oImg.width = '500';
		oImg.height = '500';
		td.appendChild(oImg);
		tr.appendChild(td);
		tbdy.appendChild(tr);
	}
	
	if (searchresult1.length != 0) {
		var tr = document.createElement('tr');
		for (var j = 0; j < searchresult1.length; j++) {
			var td = document.createElement('td');
			var oImg = document.createElement('img');
			for (var ts = 0; ts < BHC.length; ts++) {
				if (searchresult1[j] == BHC[ts]) {
					var k = ts;
					oImg.setAttribute('src', '../../IMG/BHC/' + BHC[k] + '.png');
					if (BHC[k] == 'NULL') oImg.setAttribute('src', '../../IMG/NULL.png');
					oImg.setAttribute('alt', k + BHC[k]);
					oImg.setAttribute('onclick', 'hl("BHC", ' + "'" + BHC[k] + "'" + ')');
					oImg.width = '250';
					oImg.height = '250';
					if (BHC[k] == 'NULL') var chickText = document.createTextNode(" ");
					else var chickText = document.createTextNode(" " + BHC[k] + "ᅠᅠᅠᅠᅠᅠ" + "BHC");
					td.appendChild(oImg);
					td.appendChild(chickText);
					tr.appendChild(td)
				}
			}
		}
		tbdy.appendChild(tr);
	}
	
	if (searchresult2.length != 0) {
		var tr = document.createElement('tr');
		for (var j = 0; j < searchresult2.length; j++) {
			var td = document.createElement('td');
			var oImg = document.createElement('img');
			for (var ts = 0; ts < 교촌치킨.length; ts++) {
				if (searchresult2[j] == 교촌치킨[ts]) {
					var k = ts;
					oImg.setAttribute('src', '../../IMG/교촌치킨/' + 교촌치킨[k] + '.jpg');
					if (교촌치킨[k] == 'NULL') oImg.setAttribute('src', '../../IMG/NULL.png');
					oImg.setAttribute('alt', k + 교촌치킨[k]);
					oImg.setAttribute('onclick', 'hl("교촌치킨", ' + "'" + 교촌치킨[k] + "'" + ')');
					oImg.width = '250';
					oImg.height = '250';
					if (교촌치킨[k] == 'NULL') var chickText = document.createTextNode(" ");
					else var chickText = document.createTextNode(" " + 교촌치킨[k] + "ᅠᅠᅠ" + "교촌치킨");
					td.appendChild(oImg);
					td.appendChild(chickText);
					tr.appendChild(td)
				}
			}
		}
		tbdy.appendChild(tr);
	}
	
	if (searchresult3.length != 0) {
		var tr = document.createElement('tr');
		for (var j = 0; j < searchresult3.length; j++) {
			var td = document.createElement('td');
			var oImg = document.createElement('img');
			for (var ts = 0; ts < BBQ.length; ts++) {
				if (searchresult3[j] == BBQ[ts]) {
					var k = ts;
					oImg.setAttribute('src', '../../IMG/BBQ/' + BBQ[k] + '.png');
					if (BBQ[k] == 'NULL') oImg.setAttribute('src', '../../IMG/NULL.png');
					oImg.setAttribute('alt', k + BBQ[k]);
					oImg.setAttribute('onclick', 'hl("BBQ", ' + "'" + BBQ[k] + "'" + ')');
					oImg.width = '250';
					oImg.height = '250';
					if (BBQ[k] == 'NULL') var chickText = document.createTextNode(" ");
					else var chickText = document.createTextNode(" " + BBQ[k] + "ᅠᅠᅠᅠᅠᅠ" + "BBQ");
					td.appendChild(oImg);
					td.appendChild(chickText);
					tr.appendChild(td)
				}
			}
		}
		tbdy.appendChild(tr);
	}
	
	if (searchresult4.length != 0) {
		var tr = document.createElement('tr');
		for (var j = 0; j < searchresult4.length; j++) {
			var td = document.createElement('td');
			var oImg = document.createElement('img');
			for (var ts = 0; ts < 맘스터치.length; ts++) {
				if (searchresult4[j] == 맘스터치[ts]) {
					var k = ts;
					oImg.setAttribute('src', '../../IMG/맘스터치/' + 맘스터치[k] + '.jpg');
					if (맘스터치[k] == 'NULL') oImg.setAttribute('src', '../../IMG/NULL.png');
					oImg.setAttribute('alt', k + 맘스터치[k]);
					oImg.setAttribute('onclick', 'hl("맘스터치", ' + "'" + 맘스터치[k] + "'" + ')');
					oImg.width = '250';
					oImg.height = '250';
					if (맘스터치[k] == 'NULL') var chickText = document.createTextNode(" ");
					else var chickText = document.createTextNode(" " + 맘스터치[k] + "ᅠᅠᅠᅠ" + "맘스터치");
					td.appendChild(oImg);
					td.appendChild(chickText);
					tr.appendChild(td)
				}
			}
		}
		tbdy.appendChild(tr);
	}
	
	if (searchresult5.length != 0) {
		var tr = document.createElement('tr');
		for (var j = 0; j < searchresult5.length; j++) {
			var td = document.createElement('td');
			var oImg = document.createElement('img');
			for (var ts = 0; ts < 처갓집.length; ts++) {
				if (searchresult5[j] == 처갓집[ts]) {
					var k = ts;
					oImg.setAttribute('src', '../../IMG/처갓집/' + 처갓집[k] + '.jpg');
					if (처갓집[k] == 'NULL') oImg.setAttribute('src', '../../IMG/NULL.png');
					oImg.setAttribute('alt', k + 처갓집[k]);
					oImg.setAttribute('onclick', 'hl("처갓집", ' + "'" + 처갓집[k] + "'" + ')');
					oImg.width = '250';
					oImg.height = '250';
					if (처갓집[k] == 'NULL') var chickText = document.createTextNode(" ");
					else var chickText = document.createTextNode(" " + 처갓집[k] + "ᅠᅠᅠᅠ" + "처갓집");
					td.appendChild(oImg);
					td.appendChild(chickText);
					tr.appendChild(td)
				}
			}
		}
		tbdy.appendChild(tr);
	}
	
	if (searchresult6.length != 0) {
		var tr = document.createElement('tr');
		for (var j = 0; j < searchresult6.length; j++) {
			var td = document.createElement('td');
			var oImg = document.createElement('img');
			for (var ts = 0; ts < 굽네치킨.length; ts++) {
				if (searchresult6[j] == 굽네치킨[ts]) {
					var k = ts;
					oImg.setAttribute('src', '../../IMG/굽네치킨/굽네 ' + 굽네치킨[k] + '.jpg');
					if (굽네치킨[k] == 'NULL') oImg.setAttribute('src', '../../IMG/NULL.png');
					oImg.setAttribute('alt', k + 굽네치킨[k]);
					oImg.setAttribute('onclick', 'hl("굽네치킨", ' + "'" + 굽네치킨[k] + "'" + ')');
					oImg.width = '250';
					oImg.height = '250';
					if (굽네치킨[k] == 'NULL') var chickText = document.createTextNode(" ");
					else var chickText = document.createTextNode(" " + 굽네치킨[k] + "ᅠᅠᅠᅠ" + "굽네치킨");
					td.appendChild(oImg);
					td.appendChild(chickText);
					tr.appendChild(td)
				}
			}
		}
		tbdy.appendChild(tr);
	}
	
	tbl.appendChild(tbdy);
	body.appendChild(tbl);
	trash1 = 0;
	return 0;
}

function disappear(str){
	if (str == 'ranking') {
		var x = document.getElementById("trash_1");
		x.src = "../../GIF/인기검색어.gif"; x.width=204;
	}	
}