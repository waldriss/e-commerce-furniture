export function truncate(string:string, maxlength:number) {
    if (string) { return string.length > maxlength ? string.substr(0, maxlength - 1) + '...' : string; } else { return ""; }


  }