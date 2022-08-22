function gcd(m,n){
    let r;
    m=Math.abs(m);
    n=Math.abs(n);
    if(m==0){
        return n;
    }
    if(n==0){
        return m;
    }
    while(n!=0){
        r=m%n;
        m=n;
        n=r;
    }
    return m;
}
module.exports={gcd}