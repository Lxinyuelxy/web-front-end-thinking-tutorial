/**
 * Created by j on 2016/3/31.
 */
/**
 * Created by j on 2016/3/31.
 */
// 1.�������ַ���:'123'ת��Ϊ���֣�123��
var turnArray = '123';
var res1=parseInt(turnArray,10);
console.log('the result of q1:'+res1);

// 2.ʹ��Number�����������ַ������飺['1','2']ת��Ϊ�������飺[1,2]:
var ary = ['1','2'];
var numberArr = ary.map(Number);
console.log('the result of q2:'+numberArr);

//3.������ת��Ϊ����������
console.log('the result of q3:please move to index.html');

//4.дһ��spacify������ʹ��spacify('hello world')������'h e l l o w o r l d'
var item ='hello world';
var str4=[];
function spacify(str){
    str4= str.split("");

    return str4.join(' ');
}
var res4=spacify(item);
console.log('the result of q4:'+res4);

//5.дһ����������Ӣ���ַ������°�����ĸ���򣬱���cba������abc
/*function q5(str){
    var string=[];
    var str5 = [];
    string = str.split("");
    var num = string.length;
    for(var i=0;i<num;i++)
        str5.push(string.pop());
    return str5.join('');
}
var str5 = 'abc';
var res5 = q5(str5);
console.log('the result of q5:'+res5);*/

function sortStr(str){
    var sortedStr = Array.prototype.slice.call(str).sort().join('');
    //Array.prototype.slice��������ת��Ϊ����
    console.log(sortedStr);
    return sortedStr;
}
var res5= sortStr('cbdae'); //abcde
console.log('the result of q5:'+res5);
//http://www.cnblogs.com/TomXu/archive/2012/01/05/2305453.html
//ԭ�Ϳ��������ס�
//6.var a = ['a', 'b', 'c', 'd']��ÿ��1��logһ�������е�ֵ���հ���
console.log('the result of q6:please move to index.html');

//7.����log��Ȼ�������Դ���console.log�ķ�����ʹ��apply��
function log(){
    console.log.apply(console, arguments);
};
log('the result of q7');

//8.д����ӡ�������thisָ��
var User ={
    count:1,
    getCount:function(){
        return this.count;
    }
};
console.log(User.getCount());
var func =User.getCount;
console.log(func());
console.log('the first print this means User,while the second means null');
