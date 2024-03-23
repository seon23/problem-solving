const solution = (my_string) => 
    my_string.split('').filter(char => !'aeiou'.includes(char)).join('');
