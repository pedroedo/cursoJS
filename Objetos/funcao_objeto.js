const counter = {
    value: 0,
    increment: function(){
        this.value++ //this informa que esta usando o valor do objeto em que a função está.
    },
    defineValue: function(value){
        this.value = value;
    }
};

counter.defineValue(10);
counter.increment();
console.log(counter.value);