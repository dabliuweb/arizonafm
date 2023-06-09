! function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : e.jQuery ? t(e.jQuery) : t(e.Zepto)
}(this, function(e, t) {
    "use strict";
    e.fn.lunaradio = function(i) {
        var a = "string" == typeof i,
            o = Array.prototype.slice.call(arguments, 1),
            n = this;
        return i = !a && o.length ? e.extend.apply(null, [!0, i].concat(o)) : i, a && "_" === i.charAt(0) ? n : (a ? this.each(function() {
            var a = e(this).data("lunaradio"),
                r = a && e.isFunction(a[i]) ? a[i].apply(a, o) : a;
            if (r !== a && r !== t) return n = r, !1
        }) : this.each(function() {
            e(this).data("lunaradio", new e.lunaradio(this, i))
        }), n)
    }, e.lunaradio = function(i, a) {
        var o = i.id;
        if (arguments.length) {
            this.element = e(i), this.options = e.extend(!0, {}, this.options, a);
            var n = this;
            this.element.bind("remove.lunaradio", function() {
                n.destroy()
            })
        }
        for (var r, s, l, d, c, u, p, h, m, f, g = '<svg x="0px" y="0px"\t viewBox="0 0 800 800" ><path d="M86.3,400.7C84.8,229.1,226.5,86.7,400.6,87c172.9,0.3,313.7,142.5,313.1,314.8c-0.6,170.5-138.2,313.3-314.4,313.1\tC224.3,714.7,84.9,572.1,86.3,400.7z M378.8,400.8C378.8,400.8,378.7,400.8,378.8,400.8c-0.1-32.6-0.5-65.3,0.2-97.9\tc0.3-13.7-10.3-23.4-22.7-22.8c-18.3,0.8-36.6,0.2-54.8,0.2c-13.9,0-22.1,8.1-22.1,21.9c0,65.7,0.2,131.4-0.2,197.1\tc-0.1,12.6,9.2,22.6,22.4,22.2c18.4-0.6,36.9-0.5,55.3,0c12.1,0.3,22.2-7.4,22-21.9C378.6,466.7,378.8,433.8,378.8,400.8z\t M420.9,400.8C420.9,400.8,420.9,400.8,420.9,400.8c0.1,33.1,0,66.1,0.1,99.2c0,13.8,7.7,21.4,21.5,21.4c18.8,0,37.7-0.3,56.5,0.1\tc12.3,0.3,21.6-9.6,21.5-21.4c-0.2-66.1-0.1-132.2-0.1-198.3c0-13.3-8.2-21.4-21.7-21.5c-18.6,0-37.2,0.5-55.7-0.2\tc-12-0.5-22.5,9.2-22.3,22C421.2,335,420.9,367.9,420.9,400.8z"/></svg>', w = '<svg x="0px" y="0px"\t viewBox="0 0 800 800" ><path d="M713.9,400.5c1.4,171.2-137.8,314.4-313.9,314.3c-175.6,0-314.2-143-314-315c0.2-171.3,140.6-313.9,315-313.4\tC574,87,715.4,228.9,713.9,400.5z M279.5,400.3c0,23.1,0,46.2,0,69.3c0,20.8-0.2,41.7,0.1,62.5c0.1,12.2,6,21.1,17,26.6\tc11,5.5,21.2,3,31.2-2.9c23.3-13.6,46.8-27,70.2-40.5c49.8-28.6,99.6-57.1,149.3-85.8c18.1-10.4,18.7-38.7,1.1-49.4\tc-74.5-45.4-149-90.8-223.5-136.1c-6-3.7-12.6-5.5-19.8-4.2c-15.7,2.9-25.5,14.4-25.5,30.5C279.4,313.6,279.5,357,279.5,400.3z"/></svg>', v = '<svg x="0px" y="0px" viewBox="5 5 40 40"><path d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z" transform="rotate(39.9522 25 25)"><animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"></animateTransform></path></svg>', b = '<svg x="0px" y="0px"\t viewBox="0 0 800 800" ><path d="M401.2,400c0,72.2,0,144.4,0,216.5c0,12-3.1,22.6-13.3,29.9c-13.4,9.6-31.1,8-42.8-3.7c-36.7-36.6-73.4-73.3-109.9-110.1\tc-4.5-4.6-9-6.3-15.3-6.2c-41.3,0.3-82.7,0.2-124,0.1c-15.7,0-27-8.6-31-23.8c-1.1-4-1.4-8.4-1.4-12.6c-0.1-60.2-0.1-120.4,0-180.6\tc0-11.1,2.3-21.5,11.7-28.9c6.5-5.1,13.8-7.3,22-7.3c41.6,0,83.3-0.1,124.9,0.1c4.7,0,8.1-1.2,11.5-4.7\tc37-37.2,74.1-74.3,111.2-111.3c16.1-16,41.4-12.8,52.5,6.9c3.5,6.1,3.9,13.1,3.9,20c0,69.5,0,139.1,0,208.6\tC401.2,395.3,401.2,397.7,401.2,400z"/><path d="M685.2,526.5c-7.3,0.4-12.8-2.6-17.5-7.4c-18-18-36-35.9-53.9-54c-3.1-3.1-4.6-2.8-7.5,0.1c-17.5,17.8-35.3,35.4-52.9,53.1\tc-5.2,5.2-11.2,8.5-19,8.3c-7-0.2-12.3-3.3-17-7.9c-8.9-8.7-17.6-17.5-26.4-26.3c-10.3-10.5-10.3-24.6,0.2-35.1\tc17.8-17.9,35.7-35.8,53.7-53.6c3-3,2.9-4.6,0-7.6c-17.7-17.4-35.2-35.1-52.8-52.6c-11-11-12.2-22.8-2-34.5\tc9.3-10.6,19.1-20.9,30.2-29.8c10.9-8.7,23.1-7.6,33,2.3c17.8,17.7,35.6,35.5,53.3,53.4c2.8,2.8,4.3,3,7.2,0.1\tc17.6-17.9,35.4-35.6,53.2-53.4c8.8-8.8,19.4-10.5,29.5-5c1.7,0.9,3.1,2.2,4.4,3.5c9.4,9.4,18.8,18.8,28.2,28.2\tc10,10,10.1,24.1,0,34.2c-17.8,17.9-35.7,35.8-53.7,53.6c-2.9,2.9-3.2,4.5-0.1,7.6c17.7,17.4,35.2,35.1,52.8,52.6\tc6.3,6.3,9.6,13.7,8.1,22.9c-0.9,5.6-3.9,10-7.7,13.9c-8.5,8.7-17,17.3-25.7,25.7C697.8,523.6,692.1,527,685.2,526.5z"/></svg>', x = '<svg x="0px" y="0px" viewBox="0 0 800 800"><path d="M359.2,397.1c0,71.7,0,143.3,0,215c0,9.1-1.2,17.7-7.7,24.8c-13.8,14.9-34.2,15.1-49.1,0.3c-32.2-32.1-64.3-64.3-96.4-96.4\tc-4.8-4.8-9.8-9.6-14.5-14.6c-2.6-2.8-5.3-3.9-9.1-3.9c-42.4,0.1-84.8,0.1-127.1,0.1c-15.4,0-27.1-8.9-31.2-23.6\tc-1.1-4.1-1.4-8.3-1.4-12.5c0-60,0-120,0-180c0-14.4,4.6-26.3,18.5-32.9c5.1-2.4,10.6-3.1,16.1-3.1c41.5,0,83,0,124.5,0.1\tc4.2,0,7.1-1.2,9.9-4.1c36.8-36.9,73.6-73.8,110.6-110.6c10.5-10.5,23.1-14.1,37.2-8.3c11.2,4.6,17.9,13.1,19.1,25.5\tc0.5,5.1,0.6,10.2,0.6,15.3C359.2,257.5,359.2,327.3,359.2,397.1z"/><path d="M777.4,394.2c-0.2,41.1-5.6,79-17.7,115.8c-14.5,44.1-36,84.5-65.7,120.4c-9.1,11-18.2,22-28.8,31.6\tc-18.1,16.5-36.4,32.7-57.7,44.9c-19.1,10.9-43.9-1.6-46.9-23.4c-2-14.2,3.3-25.2,14.9-32.9c20.8-13.9,39.6-30.1,56.6-48.4\tc14.9-16,27.8-33.6,38.9-52.5c18.2-31,30.2-64.2,36.7-99.4c3.8-20.4,5.4-41,4.8-61.7c-1.2-42.3-10.6-82.8-28.5-121.1\tc-11.2-23.9-25.5-46-42.4-66.4c-19.8-23.8-43.3-43.3-68.4-61.2c-12.4-8.9-16.3-23.7-10.8-38.1c5.1-13.3,17.6-20.8,32.5-19.9\tc6.1,0.4,11.3,2.4,16.3,5.6c21.2,13.8,40.9,29.5,58.5,47.5c34.5,35.1,61.6,75.3,80.2,121.1c13.4,33,22,67.1,25.4,102.5\tC776.7,371.4,776.9,384.1,777.4,394.2z"/><path d="M652.1,392.3c-0.7,56.6-15.7,104.9-47.2,147.9c-17.4,23.7-38.4,43.6-63.2,59.5c-14.3,9.1-29.1,8.5-41-2\tc-11.9-10.5-13.8-29.9-4.5-42.9c3.9-5.5,9.5-8.9,14.8-12.6c35.3-24.8,59.1-57.9,70.4-99.4c10.8-39.8,8-78.9-8.4-116.9\tc-9.9-22.8-24-42.5-41.9-59.5c-8.8-8.4-18.8-15.1-28.6-22.1c-11-7.9-15.3-24.6-9.9-37.3c6.2-14.7,19.2-22,34-20.1\tc11.1,1.5,19.2,8.3,27.5,14.4c10.7,7.8,20.8,16.3,29.9,26.1c19.7,21.3,36.2,44.6,47.8,71.4c9.2,21.3,15.2,43.4,18.3,66.3\tC651.3,375.2,651.6,385.5,652.1,392.3z"/><path d="M526.4,394.8c-0.1,30.3-9.9,54.9-27.8,76.5c-9,10.8-19.7,19.4-32.1,25.8c-21.2,11-44.2-0.7-47.6-24.3\tc-1.7-12.2,3.1-22.4,13.1-29.5c7.1-5.1,14.6-9.7,19.8-16.9c17.6-24.1,12-55.7-12.8-72.4c-3.4-2.3-7-4.3-9.9-7.1\tc-12.5-11.6-14.1-29.7-4.1-43.1c10-13.3,28-16.9,42.6-8.2c31.6,18.7,51,46.1,57.3,82.4C526.1,384.3,526.7,390.6,526.4,394.8z"/></svg>', A = '<svg  x="0px" y="0px"\t viewBox="0 0 800 800"><path d="M180.3,729.4h-72.4c-13.5,0-24.5-11-24.5-24.5V235.8c0-13.5,11-24.5,24.5-24.5h72.4c13.5,0,24.5,11,24.5,24.5v469.1\tC204.7,718.4,193.7,729.4,180.3,729.4"/><path d="M351,729.4h-72.4c-13.5,0-24.5-11-24.5-24.5V331.7c0-13.5,11-24.5,24.5-24.5H351c13.5,0,24.5,11,24.5,24.5v373.2\tC375.4,718.4,364.4,729.4,351,729.4"/><path d="M521.9,729.4h-72.4c-13.5,0-24.5-11-24.5-24.5V95.1c0-13.5,11-24.5,24.5-24.5h72.4c13.5,0,24.5,11,24.5,24.5v609.8\tC546.3,718.4,535.3,729.4,521.9,729.4"/><path d="M692.1,729.4h-72.4c-13.5,0-24.5-11-24.5-24.5V331.7c0-13.5,11-24.5,24.5-24.5h72.4c13.5,0,24.5,11,24.5,24.5v373.2\tC716.6,718.4,705.6,729.4,692.1,729.4"/></svg>', y = '<svg x="0px" y="0px" viewBox="-16 0 512 512.00113" ><path d="m262.84375 140.558594c-12.699219 12.671875-33.28125 12.671875-45.980469 0-12.695312-12.671875-12.695312-33.21875 0-45.890625 12.699219-12.671875 33.28125-12.671875 45.980469 0 12.695312 12.671875 12.695312 33.21875 0 45.890625zm0 0"/><path d="m307.257812 189.726562c-3.960937 0-7.921874-1.511718-10.9375-4.539062-6.03125-6.039062-6.019531-15.824219.019532-21.851562 12.238281-12.214844 18.976562-28.453126 18.976562-45.722657s-6.738281-33.507812-18.976562-45.722656c-6.039063-6.03125-6.050782-15.8125-.019532-21.855469 6.027344-6.039062 15.8125-6.050781 21.851563-.019531 18.089844 18.054687 28.050781 42.058594 28.050781 67.597656 0 25.535157-9.960937 49.542969-28.050781 67.597657-3.015625 3.011718-6.964844 4.515624-10.914063 4.515624zm0 0"/><path d="m342.210938 235.222656c-3.960938 0-7.921876-1.511718-10.9375-4.535156-6.03125-6.042969-6.019532-15.824219.019531-21.855469 24.414062-24.367187 37.863281-56.761719 37.863281-91.21875s-13.449219-66.851562-37.863281-91.21875c-6.039063-6.03125-6.050781-15.8125-.019531-21.855469 6.03125-6.039062 15.8125-6.050781 21.851562-.019531 30.265625 30.207031 46.9375 70.371094 46.933594 113.09375 0 42.722657-16.667969 82.890625-46.933594 113.097657-3.015625 3.007812-6.964844 4.511718-10.914062 4.511718zm0 0"/><path d="m172.371094 189.726562c-3.949219 0-7.898438-1.503906-10.917969-4.515624-18.089844-18.054688-28.050781-42.0625-28.050781-67.597657 0-25.539062 9.960937-49.542969 28.050781-67.597656 6.039063-6.03125 15.824219-6.023437 21.851563.019531 6.03125 6.039063 6.019531 15.824219-.019532 21.855469-12.238281 12.214844-18.976562 28.453125-18.976562 45.722656s6.738281 33.507813 18.976562 45.722657c6.039063 6.027343 6.050782 15.8125.019532 21.851562-3.015626 3.023438-6.976563 4.539062-10.933594 4.539062zm0 0"/><path d="m137.417969 235.222656c-3.953125 0-7.902344-1.503906-10.917969-4.515625-30.265625-30.207031-46.933594-70.371093-46.933594-113.09375 0-42.726562 16.667969-82.890625 46.933594-113.097656 6.039062-6.027344 15.824219-6.019531 21.851562.023437 6.03125 6.039063 6.019532 15.820313-.019531 21.851563-24.414062 24.367187-37.863281 56.761719-37.863281 91.21875s13.449219 66.855469 37.863281 91.222656c6.039063 6.03125 6.050781 15.8125.019531 21.855469-3.015624 3.023438-6.976562 4.535156-10.933593 4.535156zm0 0"/><path d="m443.480469 261.9375h-407.332031c-19.964844 0-36.148438 16.183594-36.148438 36.144531v177.769531c0 19.964844 16.183594 36.148438 36.148438 36.148438h407.328124c19.964844 0 36.148438-16.183594 36.148438-36.148438v-177.769531c0-19.960937-16.183594-36.144531-36.144531-36.144531zm-324.609375 203.683594h-56.933594c-8.53125 0-15.449219-6.917969-15.449219-15.453125v-126.398438c0-8.53125 6.917969-15.453125 15.449219-15.453125 8.535156 0 15.453125 6.917969 15.453125 15.453125v110.945313h41.480469c8.535156 0 15.453125 6.917968 15.453125 15.453125 0 8.535156-6.917969 15.453125-15.453125 15.453125zm63.328125-15.453125c0 8.535156-6.917969 15.453125-15.453125 15.453125s-15.453125-6.917969-15.453125-15.453125v-126.398438c0-8.53125 6.917969-15.453125 15.453125-15.453125s15.453125 6.917969 15.453125 15.453125zm130.015625-121.929688-38.160156 126.394531c-.003907.011719-.007813.023438-.011719.035157-4.144531 14.144531-25.273438 13.796875-29.5625 0-.003907-.011719-.007813-.023438-.011719-.035157l-38.160156-126.394531c-2.464844-8.171875 2.15625-16.792969 10.328125-19.261719 8.164062-2.464843 16.792969 2.15625 19.257812 10.328126l23.367188 77.394531 23.367187-77.394531c2.46875-8.171876 11.089844-12.796876 19.261719-10.328126 8.167969 2.46875 12.792969 11.089844 10.324219 19.261719zm95.066406 35.320313c8.535156 0 15.453125 6.917968 15.453125 15.453125 0 8.53125-6.917969 15.453125-15.453125 15.453125h-43.851562v40.25h52.175781c8.535156 0 15.453125 6.917968 15.453125 15.453125 0 8.535156-6.917969 15.453125-15.453125 15.453125h-67.628907c-8.535156 0-15.453124-6.917969-15.453124-15.453125v-126.398438c0-8.53125 6.917968-15.453125 15.453124-15.453125h69.710938c8.53125 0 15.453125 6.917969 15.453125 15.453125 0 8.535157-6.921875 15.453125-15.453125 15.453125h-54.261719v24.335938zm0 0"/></svg>', C = "data:image/gif;base64,R0lGODlhAQABAJEAAAAAAP///////wAAACH5BAEAAAIALAAAAAABAAEAAAICVAEAOw%3D%3D", k = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNAay06AAAALlSURBVEiJxZe9bhNBEMd/5zsSkhjs0Fi0SYG7CAmltQUpeAGeISmTB6CFSOQFkoKOwqJAQAQNCCHyIUs0KYAiEmUaQ2GshORuPyhu196c95wLSHik0a3v7P3Nf2Zudx1orRmHlcZCHSc48t0MgqDIbwPjANr4SHPL6gWPsJIDe2k+PwAUIIwXaxqt9ZB7LAC2gTfANeCtNga8A24CVeAqEDrB5bKKgrctaHNzU5fLZe2Aj42/B2omsEkTQC64SHOVgMaI54GUcjqO47vAd+AFcB2YAq7kqS8K9ppSCiAQQiCEAAi63e494DkwC0yT9tEQvAjY7V7m5+cBkFJaGEmS9MFCCDqdTgN4Rlr3aTxpLwLWwMOtrS0Ams0mjUZjCGaDcMZ3gBvADJ6UFwU/XV5ePraTKqXIgbnjgLTWFnyOVeQ91qTvJ0mSoJSi1Wr1A7AwKWVfvRlD2t0TeFI9Cmxr238vLUwphZQSKSVHR0eTLiwDDo1Sd+GBrPyMvQa6wCvSBumn0dbXNpj1w8PDSaf2Nniv5SkuAY1er1dWSt2vVCotTBqtWt/VHRvLXT7zFAfAjlXU6XSaFmwV+dw+29vbA/hGuoYrPJtIbqqjKFqvVqsf7KRLS0tTPojPV1ZWDhg0pTTwQoq1EOJzGIYbtVrtU5IkrK6uemG+e8At4BEQG5dZxXk1VkAipWwDQghBvV4nW2Nfndvttp0jBk6BMzzb5aiuFsBJFEXrc3NzH0fV1PW1tbUD4Ou/gBUQCyH2wzB8Uq/Xdy5qKifNjw30FEi4RI1d+JmUcj8Mw42FhYVdC8mrt7EY+G089oEvWjJtZ55IKXfDMAwWFxdvk9mxMvbFAE/ISTNA4DtxeA57JdJ1d4Z0n50FyqTrsJs1TarwF/AD+El6OpHwd4c9ZaLXzthu8lmwIFXcM98bSjMUV2ytZGAT5jq06zA4ccYMFpA0Kod1WTAM6juqzjYz5ya/EPw/bGx/Yf4AHxykPX4eCXQAAAAASUVORK5CYII%3D), auto", S = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNAay06AAAAKmSURBVEiJ7ZbPaxNBFMc/m4lttYtNBem9F3MrgvRawR78C/wbemz/CS3Yf8OLXgQ9KAgi9gcBLz2oh0IOhfZSLdUkTZN9s+NhZtpNdrJZFeyhDgzz2GTn8977vnmzkTGGyxiVS6H+B18JcDX0MIqiMu9GbgKYoTU4sicoCC4BU8BLZz8CUkC7mToHis+pMSY3C6CvgRbwRkRMr9czwDugDbwFbgExMOmcG8kqC47iODbGGCMiJo5j0+12TafTMUDn5OTEHB8fG6DjHLntHLjGhRwDjLLFFbXb7baIICIAZOxKxo4ODg4eAC+AWeAGVs5c0ZQFK4AkSUJgRIQkSQAiEaHZbC4Bz4Cag+fSXlRcvpAq3msRIU1T9vf3ERG01hweHk552zvh7HtYzROgjy28cx2LIn4F/HBrnI3SR661Pn8mIuzt7U1lshIBN4FprNYDrFERV4ClVqsVp2n6cGZm5nk2Yq11cM3abkw6aC7VoyKOgE0f0dHR0X0P9hGFpv9te3sb4CuDTaYUmGq1ul6r1d77TZeXl6+HIKG5srKyi9VTGNJ2HNiIyCel1Mbc3NzHJElYXV0NwkLPgDvAY2xR5QoLRmucAonWugGIiFCv1xnWOKRzo9Hwe/SBM6DnIh8AF1W1AKfVanV9fn7+Q5Gm2bm2trYLfPkbcAr0RWRHKfW0Xq9vjiuqTJqfOOgZ9hynw5uP61wp0NNa7yilNhYWFrY8ZJTebvSBrpv9EHjctegr81RrvaWUihYXF+9ScEyAzw54yog0A0Sh2yjwIVDBNoNpbPOfxXazCQazZrAR/gS+Ad+xN5aGP/sQSJ33JmP7m2cYLNiIW+5/uTRD+Yj98BfGhFtzrdCBBBu5byDWqwzrd8FwoW+Rzj4zA5uPBf+LcfW+q38BmqVkrsNuDnIAAAAASUVORK5CYII%3D), auto", E = De(a.token, ""), T = De(a.userinterface, "small").toString().toLowerCase(), M = De(a.backgroundcolor, "rgba(0,0,0,0)"), I = De(a.fontcolor, "#ffffff"), z = De(a.hightlightcolor, "#f86808"), B = De(a.fontname, ""), R = De(a.googlefont, ""), N = De(a.fontratio, "0.4"), F = De(a.radioname, ""), D = De(a.scroll, "true").toString().toLowerCase(), O = De(a.coverimage, "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAMAAAC3Ycb+AAAAtFBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////oK74hAAAAO3RSTlMABA1HP0wXZDsINxsRaVAUJZkzMFhgRFRcIilujCx3H4egf3Olg5R7karMsrzc4dKutvnA18jtxOfzuZkjWdQAABt3SURBVHja7MGBAAAAAICg/akXqQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGbXTtfUhMEwDGP3vaX7Qlux1AVJgAAx+J7/eVUgRSBh0S4/JPeH2DJzzZ/nCgw4hmEYhmEYhmEYhmEYhmEYhmFM9uDR22+OG2dEcI5CzgXJYm+7+Xjv+8Iy/pvFqw8/o5RhCCPx8uNXk+Wfe/DByXJMxUL74yfL+EdevnUJLid2D59axt/2ZJXheqHz3py+/mYNh+JPcds0+TteLQn+DmE/sYw/8/jjAX9T+OWZZVzt1Zbjb2Pea8u4yqMI/0Zy3zIu9iLDv5M+NBf4C3P4mISxPM8556LGOT8dYoxhEHlnkkx3N8OoUwmZgRZbjdYHTmWGspC3ljHJ1wAjTinoVCLvjRLes4xRL20MYmUMQi8hOINWZJ50jVj84BiQC9KLFtPYmlOuFG3e5WPL6PfGH66RktMmp9jKt+700jah7y2jx+MlG6iRlsJ0In0pwaBwX1qGziOCPpyEtVRu6XUoR5f4YBmKxU/0YCK8Wp2w3FWIeol371hG26sMejkN/dCXwmJThNVMlypnLmKeA7d9zKHFiD+G0BZSh9P3k4dpJwnbWEZtse7LkTX58q1FoIOfDmbFNqKbZG8ezP/2NNPnoJneoXhVb2EOBQs7GX2FtiX5ahmFewI6IjuMIgw6VJ9QEXI05ebpVuEjg0buJ7VDj0ygwkgTA/hwzKyWMjSZC4llbaBDkoZATofPUOFZ0nTgAAsPQxI5MuqZO/eH8gsXGvwQDElKRBuv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"), j = De(a.onlycoverimage, "false").toString().toLowerCase(), P = De(a.coverstyle, "circle").toString().toLowerCase(), L = De(a.usevisualizer, "fake").toString().toLowerCase(), V = parseInt(De(a.visualizertype, 4)), q = De(a.itunestoken, ""), U = De(a.metadatatechnic, "php").toString().toLowerCase(), Q = De(a.ownmetadataurl, ""), G = De(a.corsproxy, ""), X = De(a.usestreamcorsproxy, "false").toString().toLowerCase(), Z = De(a.streamurl, ""), W = De(a.streamtype, "other").toString().toLowerCase(), Y = De(a.icecastmountpoint, ""), H = De(a.radionomyid, ""), K = De(a.radionomyapikey, ""), J = De(a.radiojarid, ""), _ = De(a.radiocoid, ""), $ = De(a.shoutcastpath, ""), ee = De(a.shoutcastid, ""), te = De(a.streamsuffix, "/;type=mp3"), ie = parseInt(De(a.metadatainterval, 2e4)), ae = parseInt(De(a.volume, 90)), oe = De(a.debug, "false").toString().toLowerCase(), ne = 0, re = 0, se = "", le = 0, de = 0, ce = !1, ue = !1, pe = 0, he = 0, me = [], fe = [], ge = 0, we = [], ve = 0, be = !1, xe = (new LUNARADIOParser).getResult(), Ae = !1, ye = "", Ce = 0; Ce < 511; Ce += 1) we.push(Math.floor(Math.random() * (254 / (Ce / 100 + 1)) + 1));
        fe = new Array;
        for (Ce = 0; Ce < 512; Ce++) {
            var ke = {};
            ke.x = Math.floor(1920 * Math.random() + 1), ke.y = Math.floor(1080 * Math.random() + 1), ke.radius = Math.floor(1080 * Math.random() / 5 + 2), ke.alpha = 1, ke.speed = Math.floor(50 * Math.random() + 30), fe.push(ke)
        }
        var Se = 10,
            Ee = 1,
            Te = 20,
            Me = 200,
            Ie = 8,
            ze = "",
            Be = !1,
            Re = 40,
            Ne = 60,
            Fe = 80;

        function De(e, i) {
            return e !== t && "" != e.toString() || (e = i), e
        }

        function Oe() {
            if (!rt()) {
                for (; m.lastElementChild;) m.removeChild(m.lastElementChild);
                m.load()
            }
        }

        function je() {
            if (rt()) be || (m.src = f, m.load());
            else {
                var e = document.createElement("source");
                e.src = f, m.appendChild(e), m.load()
            }
            be = !0
        }

        function Pe(e) {
            var t = document.createElement("link");
            t.type = "text/css", t.rel = "stylesheet", t.href = "https://fonts.googleapis.com/css?family=" + e, document.getElementsByTagName("head")[0].appendChild(t)
        }

        function Le() {
            switch (U) {
                case "ownmetadataurl":
                    ! function() {
                        var t = "GET",
                            i = Q,
                            a = i,
                            o = {};
                        "corsproxy" == U && (t = "GET", a = i = G + i, o = {});
                        "fallback" == U && (t = "POST", a = ze + "fallback.php", o = {
                            url: i
                        });
                        e.ajax({
                            dataType: "text",
                            method: t,
                            crossDomain: !0,
                            url: a,
                            data: o,
                            success: function(e) {
                                Ve(e, "")
                            },
                            error: function(e, t, i) {
                                Ve("", "")
                            }
                        })
                    }();
                    break;
                case "stream-icy-meta":
                    i = nt(), a = ze + "stream-icy-meta.php", e.ajax({
                        dataType: "text",
                        url: a,
                        method: "POST",
                        crossDomain: !0,
                        data: {
                            url: i
                        },
                        success: function(e) {
                            Ve(e, "")
                        },
                        error: function(e, t, i) {
                            Ve("", "")
                        }
                    });
                    break;
                default:
                    switch (W) {
                        case "icecast2":
                            ! function() {
                                var i = "GET",
                                    a = Z + "/status-json.xsl",
                                    o = a,
                                    n = {};
                                "corsproxy" == U && (i = "GET", o = a = G + a, n = {});
                                "fallback" == U && (i = "POST", o = ze + "fallback.php", n = {
                                    url: a
                                });
                                e.ajax({
                                    dataType: "text",
                                    method: i,
                                    crossDomain: !0,
                                    url: o,
                                    data: n,
                                    success: function(e) {
                                        try {
                                            e = JSON.parse(e);
                                            var i = {};
                                            if (e.icestats.source.length === t) i = e.icestats.source;
                                            else
                                                for (var a = 0; a < e.icestats.source.length; a++) {
                                                    var o = e.icestats.source[a].listenurl;
                                                    Y == o.substr(o.length - Y.length, Y.length) && (i = e.icestats.source[a])
                                                }
                                            var n = "",
                                                r = "";
                                            i.hasOwnProperty("title") && (r = i.title), i.hasOwnProperty("artist") && (n = i.artist), Ve("" != n && "" != r ? n + " - " + r : "" != n ? n : r, "")
                                        } catch (e) {
                                            dt("Error on JSON File: " + e), Ve("", "")
                                        }
                                    },
                                    error: function(e, t, i) {
                                        dt("Error on JSON File: " + t), Ve("", "")
                                    }
                                })
                            }();
                            break;
                        case "shoutcast2":
                            ! function() {
                                var t = "GET",
                                    i = Z + "/currentsong?sid=" + ee,
                                    a = i,
                                    o = {};
                                "corsproxy" == U && (t = "GET", a = i = G + i, o = {});
                                "fallback" == U && (t = "POST", a = ze + "fallback.php", o = {
                                    url: i
                                });
                                e.ajax({
                                    dataType: "text",
                                    method: t,
                                    crossDomain: !0,
                                    url: a,
                                    data: o,
                                    success: function(e) {
                                        Ve(e, "")
                                    },
                                    error: function(e, t, i) {
                                        Ve("", "")
                                    }
                                })
                            }();
                            break;
                        case "radionomy":
                            ! function() {
                                var t = "https://api.radionomy.com/currentsong.cfm?radiouid=" + H + "&apikey=" + K + "&callmeback=yes&type=xml&cover=yes&previous=yes";
                                e.ajax({
                                    dataType: "xml",
                                    method: "GET",
                                    crossDomain: !0,
                                    url: t,
                                    success: function(t) {
                                        try {
                                            var i = e(t).find("track").find("artists").text();
                                            e(t).find("track").find("title").text() != e(t).find("track").find("artists").text() && (i += " - " + e(t).find("track").find("title").text());
                                            var a = e(t).find("track").find("cover").text();
                                            Ve(i, a)
                                        } catch (e) {
                                            Ve("", "")
                                        }
                                    },
                                    error: function(e, t, i) {
                                        Ve("", "")
                                    }
                                })
                            }();
                            break;
                        case "radiojar":
                            ! function() {
                                var t = "https://www.radiojar.com/api/stations/" + J + "/now_playing/?rand=" + Math.random();
                                e.ajax({
                                    dataType: "text",
                                    method: "GET",
                                    crossDomain: !0,
                                    url: t,
                                    success: function(e) {
                                        try {
                                            var t = JSON.parse(e);
                                            Ve(t.artist + " - " + t.title, t.thumb)
                                        } catch (e) {
                                            Ve("", "")
                                        }
                                    },
                                    error: function(e, t, i) {
                                        Ve("", "")
                                    }
                                })
                            }();
                            break;
                        case "radioco":
                            ! function() {
                                var t = "https://public.radio.co/stations/" + _ + "/status";
                                e.ajax({
                                    dataType: "text",
                                    method: "GET",
                                    crossDomain: !0,
                                    url: t,
                                    success: function(e) {
                                        try {
                                            var t = JSON.parse(e);
                                            Ve(t.current_track.title, t.current_track.artwork_url_large)
                                        } catch (e) {
                                            Ve("", "")
                                        }
                                    },
                                    error: function(e, t, i) {
                                        Ve("", "")
                                    }
                                })
                            }()
                    }
            }
            var i, a
        }

        function Ve(t, i) {
            var fix_list = {'â€š':'‚','â€ž':'„','â€¦':'…','â€¡':'‡','â€°':'‰','â€¹':'‹','â€˜':'‘','â€™':'’','â€œ':'“','â€¢':'•','â€“':'–','â€”':'—','â„¢':'™','â€º':'›','â‚¬':'€','Ã‚':'Â','Æ’':'ƒ','Ãƒ':'Ã','Ã„':'Ä','Ã…':'Å','â€':'†','Ã†':'Æ','Ã‡':'Ç','Ë†':'ˆ','Ãˆ':'È','Ã‰':'É','ÃŠ':'Ê','Ã‹':'Ë','Å’':'Œ','ÃŒ':'Ì','Å½':'Ž','ÃŽ':'Î','Ã‘':'Ñ','Ã’':'Ò','Ã“':'Ó','â€':'”','Ã”':'Ô','Ã•':'Õ','Ã–':'Ö','Ã—':'×','Ëœ':'˜','Ã˜':'Ø','Ã™':'Ù','Å¡':'š','Ãš':'Ú','Ã›':'Û','Å“':'œ','Ãœ':'Ü','Å¾':'ž','Ãž':'Þ','Å¸':'Ÿ','ÃŸ':'ß','Â¡':'¡','Ã¡':'á','Â¢':'¢','Ã¢':'â','Â£':'£','Ã£':'ã','Â¤':'¤','Ã¤':'ä','Â¥':'¥','Ã¥':'å','Â¦':'¦','Ã¦':'æ','Â§':'§','Ã§':'ç','Â¨':'¨','Ã¨':'è','Â©':'©','Ã©':'é','Âª':'ª','Ãª':'ê','Â«':'«','Ã«':'ë','Â¬':'¬','Ã¬':'ì','Â®':'®','Ã®':'î','Â¯':'¯','Ã¯':'ï','Â°':'°','Ã°':'ð','Â±':'±','Ã±':'ñ','Â²':'²','Ã²':'ò','Â³':'³','Ã³':'ó','Â´':'´','Ã´':'ô','Âµ':'µ','Ãµ':'õ','Â¶':'¶','Ã¶':'ö','Â·':'·','Ã·':'÷','Â¸':'¸','Ã¸':'ø','Â¹':'¹','Ã¹':'ù','Âº':'º','Ãº':'ú','Â»':'»','Ã»':'û','Â¼':'¼','Ã¼':'ü','Â½':'½','Ã½':'ý','Â¾':'¾','Ã¾':'þ','Â¿':'¿','Ã¿':'ÿ','Ã€':'À','Ã':'Á','Å':'Š','Ã':'Í','Ã':'Ï','Ã':'Ð','Ã':'Ý','Ã':'à','Ã­':'í'};
            var result = Object.entries(fix_list);

            se != e("<div/>").html(t).text() && (dt("New Title: " + (se = e("<div/>").html(t).text())), result.forEach(element => {se = se.replace(element[0], element[1])}), e("." + r + "texttitlespan, ." + r + "smalltexttitlespan").html(se), "" == i ? function() {


                

                

                
                if ("" != se) {
                    var t = se.replace(/ *\([^)]*\) */g, ""),
                        i = "https://itunes.apple.com/search?term=" + encodeURIComponent(t) + "&media=music&limit=1&url=" + encodeURIComponent(ze),
                        a = i,
                        o = a,
                        n = "GET";
                    rt() && (n = "POST", o = ze + "fallback.php", a = i), dt("ITUNES: " + o), e.ajax({
                        dataType: "text",
                        method: n,
                        crossDomain: !0,
                        url: o,
                        data: {
                            url: a
                        },
                        success: function(e) {
                            try {
                                e = JSON.parse(e);
                                var t = "",
                                    i = "";
                                1 == e.results.length ? (dt("COVER: " + (t = (t = e.results[0].artworkUrl100).replace("100x100bb", "600x600bb"))), "" != q && (i = e.results[0].trackViewUrl + "&app=itunes&at=" + q), qe(t, i)) : qe(O, "")
                            } catch (e) {
                                qe(O, "")
                            }
                        },
                        error: function() {
                            qe(O, "")
                        }
                    })
                } else qe(O, "")
            }() : qe(i, ""), Ue(!0))
        }

        function qe(t, i) {
            "false" == j && ("" != (ye = i) ? e("#" + r + "coverwrapper, #" + r + "smallcoverwrapper").css({
                cursor: "pointer"
            }) : e("#" + r + "coverwrapper, #" + r + "smallcoverwrapper").css({
                cursor: "hand"
            }), ++ve > 2 && (ve = 1), e("<img/>").attr("src", t).on("load", function() {
                e(this).remove(), e("#" + r + "backgroundimage" + ve + ", #" + r + "coverwrapper" + ve + ", #" + r + "smallcoverwrapper" + ve).css({
                    background: "url(" + t + ")",
                    opacity: "1.0",
                    "background-repeat": "no-repeat",
                    "background-size": "cover"
                }), 1 == ve ? e("#" + r + "backgroundimage2, #" + r + "coverwrapper2, #" + r + "smallcoverwrapper2").css({
                    opacity: "0.0"
                }) : e("#" + r + "backgroundimage1, #" + r + "coverwrapper1, #" + r + "smallcoverwrapper1").css({
                    opacity: "0.0"
                })
            }))
        }

        function Ue(t) {
            if ("true" == D) {
                var i = "";
                "small" == T && (i = "small"), t && e("#" + r + i + "texttitle").hasClass(r + "Marquee") && (e("#" + r + i + "texttitle").removeClass(r + "Marquee"), e("#" + r + i + "texttitle").html(e("." + r + i + "texttitlespan").first()), e("#" + r + i + "texttitle").data("lunaradioMarquee").pause()), e("#" + r + i + "textradioname").width() > e("." + r + i + "textradionamespan").first().width() ? e("#" + r + i + "textradioname").hasClass(r + "Marquee") && (e("#" + r + i + "textradioname").removeClass(r + "Marquee"), e("#" + r + i + "textradioname").html(e("." + r + i + "textradionamespan").first()), e("#" + r + i + "textradioname").data("lunaradioMarquee").pause()) : e("#" + r + i + "textradioname").hasClass(r + "Marquee") || (e("#" + r + i + "textradioname").addClass(r + "Marquee"), e("#" + r + i + "textradioname").html(e("." + r + i + "textradionamespan").first()), e("#" + r + i + "textradioname").lunaradioMarquee()), e("#" + r + i + "texttitle").width() > e("." + r + i + "texttitlespan").first().width() ? e("#" + r + i + "texttitle").hasClass(r + "Marquee") && (e("#" + r + i + "texttitle").removeClass(r + "Marquee"), e("#" + r + i + "texttitle").html(e("." + r + i + "texttitlespan").first()), e("#" + r + i + "texttitle").data("lunaradioMarquee").pause()) : e("#" + r + i + "texttitle").hasClass(r + "Marquee") || (e("#" + r + i + "texttitle").addClass(r + "Marquee"), e("#" + r + i + "texttitle").html(e("." + r + i + "texttitlespan").first()), e("#" + r + i + "texttitle").lunaradioMarquee())
            }
        }

        function Qe(t) {
            t < 0 && (t = 0), t > 100 && (t = 100), rt() || (m.volume = t / 100);
            var i = e("#" + r + "volumewrapper").width() * t / 100;
            e("#" + r + "volumefill").css({
                width: i + "px"
            }), e("#" + r + "volumeicon").css({
                left: i - e("#" + r + "volumeicon").width() / 2 + "px"
            }), e("#" + r + "textvolumeend").html(Math.round(t) + "%")
        }

        function Ge(t) {
            t < 0 && (t = 0), t > 100 && (t = 100), 0 == Math.round(t) ? e("#" + r + "smalliconvolume").html(b) : e("#" + r + "smalliconvolume").html(x), rt() || (m.volume = t / 100), e("#" + r + "smalltextvolume").html(Math.round(t) + "%");
            var i = e("#" + r + "smallvolumegrab").width() * t / 100;
            e("#" + r + "smallvolumebackground").css({
                width: i + "px"
            }), d.width = i, d.height = ne
        }

        function Xe() {
            re = e("#" + r).width(), ne = e("#" + r).height(), Be && (ne = Fe, re < 959 && (ne = Ne), re < 599 && (ne = Re), e("#" + r).css({
                height: ne + "px"
            }))
        }

        function Ze() {
            Xe(), "big" == T ? function() {
                d.width = re, d.height = ne;
                var t = Ee * ne / 100,
                    i = ne / 2 - Te - t - 4 * t;
                e("#" + r + "coverwrapper").css({
                    top: ne / 4 - i / 2 - t + "px",
                    left: re / 2 - i / 2 - 2 * t + "px",
                    width: i + "px",
                    height: i + "px",
                    border: "solid " + 2 * t + "px rgba(" + ct(I).r + ", " + ct(I).g + ", " + ct(I).b + ", 0.2)"
                }), e("#" + r + "backgroundimage").css({
                    "-webkit-filter": "blur(" + 5 * t + "px)",
                    filter: "blur(" + 5 * t + "px)",
                    top: 14 * t + "px",
                    left: re / 2 - i / 1.25 + "px",
                    width: 1.5 * i + "px",
                    height: 1.5 * i + "px"
                });
                var a = ne / 8,
                    o = a / 2,
                    n = a * N,
                    s = a - n,
                    l = ne / 2 + t,
                    c = l + n + t,
                    u = c + s + 2 * t,
                    p = u + o,
                    h = (ne - (u + o)) / 2 + u + o - a / 1.25,
                    m = h + a / 1.25 - o / 2;
                e("#" + r + "textradioname").css({
                    top: l + "px",
                    left: Te + "px",
                    width: re - 2 * Te + "px",
                    height: n + 2 * t + "px",
                    "font-size": n + "px",
                    "line-height": n + 2 * t + "px"
                }), e("#" + r + "texttitle").css({
                    top: c + "px",
                    left: Te + "px",
                    width: re - 2 * Te + "px",
                    height: s + 2 * t + "px",
                    "font-size": s + "px",
                    "line-height": s + 2 * t + "px"
                }), e("#" + r + "volumewrapper").css({
                    top: u + "px",
                    left: 2 * Te + "px",
                    width: re - 4 * Te + "px",
                    height: o + "px"
                }), e("#" + r + "volumebackground, #" + r + "volumefill").css({
                    height: o / 4 / 2 + "px",
                    top: o / 2 - o / 4 / 2 + "px",
                    "border-radius": o / 2 / 2 + "px"
                }), e("#" + r + "volumeicon").css({
                    top: o / 6 + "px",
                    height: o / 2 + "px",
                    width: o / 2 + "px"
                }), e("#" + r + "buttonvolumeoff").css({
                    top: p + "px",
                    left: 2 * Te + "px",
                    width: o + "px",
                    height: o + "px"
                }), e("#" + r + "buttonvolumeon").css({
                    top: p + "px",
                    right: 2 * Te + "px",
                    width: o + "px",
                    height: o + "px"
                }), e("#" + r + "textvolumeend").css({
                    
                    top: m + "px",
                    // left: re / 2 - a / 1.25 - Te - o + "px",
                    left: 1 * Te + "px",
                    height: o + "px",
                    width: 2 * o + "px",
                    height: o + "px",
                    "font-size": o / 2 + "px",
                    "line-height": o + "px"

                    // top: p + "px",
                    // right: o + 2 * Te + "px",
                    // width: 2 * o + "px",
                    // height: o + "px",
                    // "font-size": o / 2 + "px",
                    // "line-height": o + "px"
                }), e("#" + r + "pauseplaywrapper").css({
                    top: h + "px",
                    left: re / 2 - a / 1.25 + "px",
                    width: 1.5 * a + "px",
                    height: 1.5 * a + "px"
                }), e("#" + r + "iconlive").css({
                    top: m + "px",
                    left: re / 2 + a / 1.25 + Te + "px",
                    height: o + "px",
                    width: o + "px"
                }), e("#" + r + "buttonanalyzer").css({
                    top: m + "px",
                    left: re / 2 - a / 1.25 - Te - o + "px",
                    height: o + "px",
                    width: o + "px"
                }), Qe(le), Ue(!1)
            }() : function() {
                var t = Se * ne / 100,
                    i = (ne - 3 * t) * N,
                    a = ne - 3 * t - i;
                e("#" + r + "smalltextradioname").css({
                    top: "0px",
                    left: ne + t + "px",
                    width: re - 3 * ne - 2 * t + "px",
                    height: i + 2 * t + "px",
                    "font-size": i + "px",
                    "line-height": i + 2 * t + "px"
                }), e("#" + r + "smalltexttitle").css({
                    top: i + t + "px",
                    left: ne + t + "px",
                    width: re - 3 * ne - 2 * t + "px",
                    height: a + 2 * t + "px",
                    "font-size": a + "px",
                    "line-height": a + 2 * t + "px"
                }), e("#" + r + "smallpauseplaywrapper").css({
                    top: "0px",
                    left: "0px",
                    width: ne + "px",
                    height: ne + "px"
                }), "circle" == P ? e("#" + r + "smallcoverwrapper").css({
                    top: t + "px",
                    right: t + "px",
                    width: ne - 2 * t + "px",
                    height: ne - 2 * t + "px"
                }) : e("#" + r + "smallcoverwrapper").css({
                    top: "0px",
                    right: "0px",
                    width: ne + "px",
                    height: ne + "px"
                });
                e("#" + r + "smallvolumegrab").css({
                    top: "0px",
                    left: ne + "px",
                    width: re - 2 * ne + "px",
                    height: ne + "px"
                }), e("#" + r + "smallvolumebackground").css({
                    left: ne + "px",
                    height: ne + "px"
                }), e("#" + r + "smalliconlive").css({
                    top: t + "px",
                    right: ne + 2 * t + "px",
                    width: ne / 2 + "px",
                    height: ne / 2 + "px"
                }), e("#" + r + "smalltextvolume").css({
                    overflow: "hidden",
                    bottom: "0px",
                    right: ne / 2.5 + ne + 2 * t + "px",
                    width: re / 2 + "px",
                    height: ne / 2.5 + "px",
                    "font-size": ne / 2.5 - 2 * t + "px",
                    "line-height": ne / 2.5 + "px"
                }), e("#" + r + "smalliconvolume").css({
                    bottom: "0px",
                    right: ne + 2 * t + "px",
                    width: ne / 2.5 + "px",
                    height: ne / 2.5 + "px",
                    "font-size": ne / 2.5 - 2 * t + "px",
                    "line-height": ne / 2.5 + "px"
                }), e("#" + r + "canvas").css({
                    left: ne + "px"
                }), Ge(le), Ue(!1)
            }()
        }

        function We() {
            "none" != e("#" + r + "buttonplay").css("pointer-events") && (e("#" + r + "buttonpause").stop(), e("#" + r + "buttonplay").stop(), e("#" + r + "smallbuttonpause").stop(), e("#" + r + "smallbuttonplay").stop())
        }

        function Ye() {
            ce = !0, e("#" + r + "buttonpause").fadeIn(200, function() {}), e("#" + r + "buttonplay").fadeOut(200, function() {}), e("#" + r + "smallbuttonpause").fadeIn(200, function() {}), e("#" + r + "smallbuttonplay").fadeOut(200, function() {})
        }

        function He() {
            ce = !1, e("#" + r + "buttonpause").fadeOut(200, function() {}), e("#" + r + "buttonplay").fadeIn(200, function() {}), e("#" + r + "smallbuttonpause").fadeOut(200, function() {}), e("#" + r + "smallbuttonplay").fadeIn(200, function() {}), e("#" + r + "audiopreloader").fadeOut(0), e("#" + r + "smallaudiopreloader").fadeOut(0)
        }

        function Ke() {
            dt("playmode");
            try {
                e(".lunaaudioplayer").each(function() {
                    e(this).attr("id") != r && e(this).data("lunaradio").pause()
                })
            } catch (e) {
                dt(e)
            }
            Ye(), be || function() {
                if (void 0 === l) {
                    if ("real" == L) {
                        try {
                            l = new(window.AudioContext || window.webkitAudioContext), c = l.createAnalyser(), u = function(e) {
                                const t = e.createScriptProcessor(512);
                                return t.onaudioprocess = _e, t.averaging = .98, t.connect(e.destination), t
                            }(l), c.smoothingTimeConstant = .9, c.fftSize = 1024, dt("analyzer is created")
                        } catch (e) {
                            dt("error" + e), "real" == L && (L = "fake")
                        }
                        try {
                            "crossOrigin" in m ? (dt("found crossOrigin"), m.crossOrigin = "anonymous", m.onerror = $e, s = m, (h = l.createMediaElementSource(s)).connect(c), h.connect(u), c.connect(l.destination), dt("analyzer is connected")) : dt("no crossOrigin")
                        } catch (e) {
                            dt("error" + e)
                        }
                    }
                } else dt("analyzer_audioContext is not undefined")
            }(), je(), m.play().catch(function() {
                dt("error on html5 play")
            }), rt() && (m.muted = !1)
        }

        function Je() {
            if (He(), rt()) m.muted = !0;
            else try {
                m.pause(), Oe()
            } catch (e) {}
        }

        function _e(e) {
            const t = e.inputBuffer.getChannelData(0),
                i = e.inputBuffer.getChannelData(1),
                a = t.length,
                o = i.length;
            let n, r = 0;
            for (var s = 0; s < a; s++) r += (n = t[s]) * n;
            let l = Math.sqrt(r / a);
            pe = Math.max(l, pe * this.averaging), r = 0, n = 0;
            for (s = 0; s < o; s++) r += (n = i[s]) * n;
            l = Math.sqrt(r / o), he = Math.max(l, he * this.averaging)
        }

        function $e(e) {
            e.target ? dt("server not set correctly") : dt("browser doesn't support crossOrigin requests")
        }

        function et() {
            if ("fake" == L || "real" == L) {
                try {
                    window.requestAnimationFrame(et) || window.mozRequestAnimationFrame(et) || window.webkitRequestAnimationFrame(et) || window.msRequestAnimationFrame(et) || window.oRequestAnimationFrame(et)
                } catch (e) {}
                if ("fake" == L) {
                    me = [];
                    for (var t = 0; t < 511; t += 1) ce ? me.push(Math.floor(Math.random() * (254 / (t / 100 + 1)) + 1)) : me.push(0), we[t] = we[t] + (me[t] - we[t]) / 9;
                    me = we
                }
                try {
                    "real" == L && (me = new Uint8Array(c.frequencyBinCount), c.getByteFrequencyData(me))
                } catch (e) {}
                "animated" == P && e("#" + r + "smallcoverwrapper, #" + r + "smallcoverwrapper1, #" + r + "smallcoverwrapper2, #" + r + "coverwrapper, #" + r + "coverwrapper1, #" + r + "coverwrapper2").css({
                    "border-top-left-radius": 50 - 50 * pe + "%",
                    "border-top-right-radius": 50 - 50 * he + "%",
                    "border-bottom-left-radius": 50 - 50 * pe + "%",
                    "border-bottom-right-radius": 50 - 50 * he + "%"
                });
                try {
                    switch (V) {
                        case 0:
                            p.clearRect(0, 0, d.width, d.height);
                            break;
                        case 1:
                            ! function() {
                                p.clearRect(0, 0, d.width, d.height), p.lineWidth = 2, p.miterLimit = 1, p.beginPath(), p.moveTo(0, d.height);
                                for (var e = 0; e < me.length / 2; e += 1) p.lineTo(e * d.width / me.length * 2, d.height - me[e] * d.height / 255 + 2);
                                p.strokeStyle = "rgba(" + ct(z).r + ", " + ct(z).g + ", " + ct(z).b + ", 0.5)", p.stroke(), p.closePath()
                            }();
                            break;
                        case 2:
                            ! function() {
                                p.clearRect(0, 0, d.width, d.height), p.lineWidth = 1, p.miterLimit = 1, p.beginPath(), p.moveTo(0, d.height);
                                for (var e = 0; e < me.length / 2; e += 1) p.lineTo(e * d.width / me.length * 2, d.height - me[e] * d.height / 255 + 2);
                                p.lineTo(d.width, d.height), p.lineTo(0, d.height), p.fillStyle = "rgba(" + ct(z).r + ", " + ct(z).g + ", " + ct(z).b + ", 0.5)", p.fill(), p.closePath()
                            }();
                            break;
                        case 3:
                            ! function() {
                                p.clearRect(0, 0, d.width, d.height), p.lineWidth = 1, p.miterLimit = 1, p.beginPath();
                                for (var e = 0; e < d.width; e += 3) {
                                    var t = Math.round(me.length / 2 * e / d.width);
                                    p.moveTo(e, d.height), p.lineTo(e, d.height - me[t] * d.height / 255 + 2), p.strokeStyle = "rgba(" + ct(z).r + ", " + ct(z).g + ", " + ct(z).b + ", 0.5)"
                                }
                                p.stroke()
                            }();
                            break;
                        case 4:
                            ! function() {
                                p.clearRect(0, 0, d.width, d.height), p.lineWidth = 0, p.miterLimit = 1;
                                var e = [];
                                p.beginPath(), p.moveTo(0, d.height);
                                for (var t = 0; t < re + 20; t += 20) {
                                    var i = Math.round(me.length / 8 * t / re);
                                    e.push(t), e.push(d.height - me[i] * d.height / 255 + 2)
                                }
                                it(p, e, .5), p.lineTo(re, d.height), p.lineTo(0, d.height), p.fillStyle = "rgba(" + ct(z).r + ", " + ct(z).g + ", " + ct(z).b + ", 0.1)", p.fill(), p.closePath(), p.beginPath(), p.moveTo(0, d.height), e = [];
                                for (var t = 0; t < re + 20; t += 20) {
                                    var i = Math.round(me.length / 8 * t / re);
                                    e.push(t), e.push(d.height - me[i + i] * d.height / 255 + 2)
                                }
                                it(p, e, .5), p.lineTo(re, d.height), p.lineTo(0, d.height), p.fillStyle = "rgba(" + ct(z).r + ", " + ct(z).g + ", " + ct(z).b + ", 0.15)", p.fill(), p.closePath(), p.beginPath(), p.moveTo(0, d.height), e = [];
                                for (var t = 0; t < re + 20; t += 20) {
                                    var i = Math.round(me.length / 8 * t / re);
                                    e.push(t), e.push(d.height - me[i + i + i] * d.height / 255 + 2)
                                }
                                it(p, e, .5), p.lineTo(re, d.height), p.lineTo(0, d.height), p.fillStyle = "rgba(" + ct(z).r + ", " + ct(z).g + ", " + ct(z).b + ", 0.2)", p.fill(), p.closePath(), p.beginPath(), p.moveTo(0, d.height), e = [];
                                for (var t = 0; t < re + 20; t += 20) {
                                    var i = Math.round(me.length / 8 * t / re);
                                    e.push(t), e.push(d.height - me[i + i + i + i] * d.height / 255 + 2)
                                }
                                it(p, e, .5), p.lineTo(re, d.height), p.lineTo(0, d.height), p.fillStyle = "rgba(" + ct(z).r + ", " + ct(z).g + ", " + ct(z).b + ", 0.25)", p.fill(), p.closePath()
                            }();
                            break;
                        case 5:
                            ! function() {
                                p.clearRect(0, 0, d.width, d.height), p.lineWidth = 3, p.lineCap = "round", p.miterLimit = 1, p.strokeStyle = "rgba(" + ct(z).r + ", " + ct(z).g + ", " + ct(z).b + ", 0.2)";
                                var e = [];
                                p.beginPath(), p.moveTo(0, d.height);
                                for (var t = 0; t < re + 20; t += 20) {
                                    var i = Math.round(me.length / 8 * t / re);
                                    e.push(t), e.push(d.height - me[i] * d.height / 255 + 2)
                                }
                                it(p, e, .5), p.stroke(), p.closePath(), p.lineWidth = 2, p.lineCap = "round", p.miterLimit = 1, p.strokeStyle = "rgba(" + ct(z).r + ", " + ct(z).g + ", " + ct(z).b + ", 0.3)", p.beginPath(), p.moveTo(0, d.height), e = [];
                                for (var t = 0; t < re + 20; t += 20) {
                                    var i = Math.round(me.length / 8 * t / re);
                                    e.push(t), e.push(d.height - me[i + i] * d.height / 255 + 2)
                                }
                                it(p, e, .5), p.stroke(), p.closePath(), p.lineWidth = 2, p.lineCap = "round", p.miterLimit = 1, p.strokeStyle = "rgba(" + ct(z).r + ", " + ct(z).g + ", " + ct(z).b + ", 0.4)", p.beginPath(), p.moveTo(0, d.height), e = [];
                                for (var t = 0; t < re + 20; t += 20) {
                                    var i = Math.round(me.length / 8 * t / re);
                                    e.push(t), e.push(d.height - me[i + i + i] * d.height / 255 + 2)
                                }
                                it(p, e, .5), p.stroke(), p.closePath(), p.lineWidth = 2, p.lineCap = "round", p.miterLimit = 1, p.strokeStyle = "rgba(" + ct(z).r + ", " + ct(z).g + ", " + ct(z).b + ", 0.5)", p.beginPath(), p.moveTo(0, d.height), e = [];
                                for (var t = 0; t < re + 20; t += 20) {
                                    var i = Math.round(me.length / 8 * t / re);
                                    e.push(t), e.push(d.height - me[i + i + i + i] * d.height / 255 + 2)
                                }
                                it(p, e, .5), p.stroke(), p.closePath()
                            }();
                            break;
                        case 6:
                            ! function() {
                                var e = d.height,
                                    t = e / 2;
                                "big" == T && (t = ne / 2 + ne / 8 + Ee * ne / 100 * 4 + ne / 32, e = 2 * (d.height - t));
                                p.clearRect(0, 0, d.width, d.height), p.lineWidth = 2, p.lineJoin = "round", p.beginPath(), p.strokeStyle = "rgba(" + ct(z).r + ", " + ct(z).g + ", " + ct(z).b + ", 0.3)";
                                for (var i = 0; i < d.width; i += 6) {
                                    var a = Math.round(me.length / 2 * i / d.width);
                                    p.moveTo(i, t), p.lineTo(i, t - me[a] * e / 2 / 255), p.moveTo(i, t), p.lineTo(i, t + me[a] * e / 2 / 255)
                                }
                                p.strokeStyle = "rgba(" + ct(z).r + ", " + ct(z).g + ", " + ct(z).b + ", 0.5)";
                                for (var i = 3; i < d.width; i += 6) {
                                    var a = Math.round(me.length / 2 * i / d.width);
                                    p.moveTo(i, t), p.lineTo(i, t - me[a] * e / 4 / 255), p.moveTo(i, t), p.lineTo(i, t + me[a] * e / 4 / 255)
                                }
                                p.stroke()
                            }();
                            break;
                        case 7:
                            ! function() {
                                p.clearRect(0, 0, d.width, d.height), ge++;
                                for (var e = 0; e < me.length / 2; e++) tt(p, Math.cos(ge / fe[e].speed) * fe[e].radius + fe[e].x, Math.sin(ge / fe[e].speed) * fe[e].radius + fe[e].y, fe[e].radius * me[e] / 255, (me[e] / 255 / 2 + .5) / 5)
                            }();
                            break;
                        default:
                            ! function() {
                                p.clearRect(0, 0, d.width, d.height);
                                var e = d.height / 2,
                                    t = d.height / 2;
                                "big" == T && (t = ne / 2 + ne / 8 + Ee * ne / 100 * 4 + ne / 32 - ne / 8 / 2 / 4 / 2 / 2, e = ne / 32);
                                p.lineWidth = 4, p.lineJoin = "round", p.beginPath(), p.strokeStyle = "rgba(" + ct(z).r + ", " + ct(z).g + ", " + ct(z).b + ", 0.3)";
                                for (var i = Math.round(200 * pe * (d.width - 2 * Te) / 100), a = 2 * Te; a < i; a += 6) p.moveTo(a, t), p.lineTo(a, t - e);
                                for (var o = Math.round(200 * he * (d.width - 2 * Te) / 100), a = 2 * Te; a < o; a += 6) p.moveTo(a, t), p.lineTo(a, t + e);
                                p.stroke()
                            }()
                    }
                } catch (e) {}
            }
        }

        function tt(e, t, i, a, o) {
            e.beginPath(), e.arc(t, i, a, 0, 2 * Math.PI), e.closePath(), e.fillStyle = "rgba(" + ct(z).r + ", " + ct(z).g + ", " + ct(z).b + ", " + o + ")", e.fill()
        }

        function it(e, t, i, a, o, n) {
            if (e.beginPath(), at(e, function(e, t, i, a) {
                    t = void 0 !== t ? t : .5, i = i || !1, a = a || 16;
                    var o, n, r, s, l, d, c, u, p, h, m, f, g, w = [],
                        v = [];
                    w = e.slice(0), i ? (w.unshift(e[e.length - 1]), w.unshift(e[e.length - 2]), w.unshift(e[e.length - 1]), w.unshift(e[e.length - 2]), w.push(e[0]), w.push(e[1])) : (w.unshift(e[1]), w.unshift(e[0]), w.push(e[e.length - 2]), w.push(e[e.length - 1]));
                    for (g = 2; g < w.length - 4; g += 2)
                        for (f = 0; f <= a; f++) r = (w[g + 2] - w[g - 2]) * t, s = (w[g + 4] - w[g]) * t, l = (w[g + 3] - w[g - 1]) * t, d = (w[g + 5] - w[g + 1]) * t, m = f / a, c = 2 * Math.pow(m, 3) - 3 * Math.pow(m, 2) + 1, u = -2 * Math.pow(m, 3) + 3 * Math.pow(m, 2), p = Math.pow(m, 3) - 2 * Math.pow(m, 2) + m, h = Math.pow(m, 3) - Math.pow(m, 2), o = c * w[g] + u * w[g + 2] + p * r + h * s, n = c * w[g + 1] + u * w[g + 3] + p * l + h * d, v.push(o), v.push(n);
                    return v
                }(t, i, a, o)), n) {
                e.beginPath();
                for (var r = 0; r < t.length - 1; r += 2) e.rect(t[r] - 2, t[r + 1] - 2, 4, 4)
            }
        }

        function at(e, t) {
            for (e.moveTo(t[0], t[1]), Ce = 2; Ce < t.length - 1; Ce += 2) e.lineTo(t[Ce], t[Ce + 1])
        }

        function ot(t) {
            e({
                countNum: le
            }).animate({
                countNum: Math.floor(t)
            }, {
                duration: 4 * Me,
                easing: "linear",
                step: function() {
                    le = this.countNum, Qe(this.countNum)
                },
                complete: function() {
                    le = t, Qe(t)
                }
            })
        }

        function nt() {
            var e = "";
            switch (W) {
                case "icecast2":
                    e = Z + Y;
                    break;
                case "shoutcast2":
                    e = Z + $;
                    break;
                case "radionomy":
                case "radiojar":
                case "radioco":
                    e = Z;
                    break;
                default:
                    e = Z + te
            }
            return e
        }

        function rt() {
            return "ios" == xe.os.name.toLowerCase()
        }

        function st(e) {
            e = lt.decode(e);
            var t = 0,
                i = "";
            do {
                i += String.fromCharCode(e.charCodeAt(t++) - -14)
            } while (t < e.length);
            return i
        }
        "real" != L || "safari" != xe.browser.name.toLowerCase() && !rt() || (L = "fake"), dt("USERAGENT: " + navigator.userAgent), dt("BROWSER: " + xe.browser.name), dt("OS: " + xe.os.name), dt("usevisualizer: " + L), e(document).ready(function() {
            dt("SCRIPT FOLDER: " + (ze = function(e) {
                    var t, i, a, o = document.getElementsByTagName("script");
                    for (t = 0; i = o[t]; t++)
                        if ((a = i.src).indexOf(e) >= 0) var n = a.substring(0, a.indexOf(e));
                    return n
                }("lunaradio.min.js"))),
                function(t) {
                    re = e("#" + (r = t)).width(), ne = e("#" + r).height(), "small" == T && 0 == ne && (Be = !0, Xe());
                    Pe("Roboto:400"), "" != R && Pe(R);
                    e("head").append('<style type="text/css"></style>'), (! function() {
                        var t = document.getElementById(r);
                        t.innerHTML = "", e("#" + r).addClass("lunaaudioplayer").css({
                            overflow: "hidden",
                            display: "block"
                        });
                        var a = document.createElement("div");
                        a.id = r + "containerinside", t.appendChild(a), e("#" + r + "containerinside").css({
                            position: "relative",
                            left: "0px",
                            top: "0px",
                            height: "100%",
                            width: "100%",
                            background: M
                        }), f = "true" == X && "" != G ? G + nt() : nt();
                        (m = new Audio).id = r + "html5audio", m.preload = "none", m.addEventListener("timeupdate", function() {
                            0 == m.paused && (e("#" + r + "audiopreloader").fadeOut(0), e("#" + r + "smallaudiopreloader").fadeOut(0))
                        }, !1), m.addEventListener("loadedmetadata", function() {
                            dt("loadedmetadata")
                        }, !1), m.addEventListener("ended", function() {
                            Oe(), je(), ce && m.play().catch(function() {
                                dt("error on html5 play")
                            }), dt("ended")
                        }, !1), m.addEventListener("play", function() {
                            Ye(), dt("play")
                        }, !1), m.addEventListener("loadstart", function() {
                            ce && (e("#" + r + "audiopreloader").fadeIn(0), e("#" + r + "smallaudiopreloader").fadeIn(0)), dt("loadstart")
                        }, !1), m.addEventListener("waiting", function() {
                            e("#" + r + "audiopreloader").fadeIn(0), e("#" + r + "smallaudiopreloader").fadeIn(0), dt("waiting")
                        }, !1), m.addEventListener("seeked", function() {
                            e("#" + r + "audiopreloader").fadeOut(0), e("#" + r + "smallaudiopreloader").fadeOut(0), dt("seeked")
                        }, !1), m.addEventListener("canplaythrough", function() {
                            e("#" + r + "audiopreloader").fadeOut(0), e("#" + r + "smallaudiopreloader").fadeOut(0), e("#" + r + "iconlive, #" + r + "smalliconlive").css({
                                opacity: "1.0"
                            }), dt("canplaythrough")
                        }, !1), m.addEventListener("pause", function() {
                            m.currentTime.toFixed(1) < m.duration.toFixed(1) && He(), dt("pause: currentTime: " + m.currentTime.toFixed(1) + " duration: " + m.duration.toFixed(1))
                        }, !1), m.addEventListener("error", function(t) {
                            dt(m.readyState), setTimeout(function() {
                                Oe(), je(), ce && m.play().catch(function() {
                                    dt("error on html5 play")
                                })
                            }, 1e3), e("#" + r + "iconlive, #" + r + "smalliconlive").css({
                                opacity: "0"
                            })
                        }, !0), o = a, (d = document.createElement("canvas")).id = r + "canvas", o.appendChild(d), e("#" + r + "canvas").css({
                            display: "block",
                            background: "none",
                            position: "absolute",
                            top: "0px"
                        }), p = d.getContext("2d"), "big" == T ? function(t) {
                            var a = document.createElement("div");
                            a.id = r + "playerwrapper", t.appendChild(a), e("#" + r + "playerwrapper").css({
                                    overflow: "hidden",
                                    display: "block",
                                    position: "absolute",
                                    left: "0px",
                                    top: "0px",
                                    height: "100%",
                                    width: "100%"
                                }),
                                function(t) {
                                    var i = document.createElement("div");
                                    i.id = r + "backgroundimage", /*t.appendChild(i),*/ e("#" + r + "backgroundimage").css({
                                        position: "absolute",
                                        left: "0px",
                                        top: "0px",
                                        height: "100%",
                                        width: "100%",
                                        "-webkit-filter": "blur(40px)",
                                        filter: "blur(40px)",
                                        opacity: "0.5"
                                    });
                                    var a = document.createElement("div");
                                    a.id = r + "backgroundimage1", i.appendChild(a), e("#" + r + "backgroundimage1").css({
                                        position: "absolute",
                                        left: "0px",
                                        top: "0px",
                                        height: "100%",
                                        width: "100%",
                                        transition: "opacity 1s",
                                        opacity: "0.0",
                                        "background-repeat": "no-repeat",
                                        "background-size": "cover"
                                    }), (a = document.createElement("div")).id = r + "backgroundimage2", /*i.appendChild(a),*/ e("#" + r + "backgroundimage2").css({
                                        position: "absolute",
                                        left: "0px",
                                        top: "0px",
                                        height: "100%",
                                        width: "100%",
                                        transition: "opacity 1s",
                                        opacity: "0.0",
                                        "background-repeat": "no-repeat",
                                        "background-size": "cover"
                                    });
                                    var o = document.createElement("div");
                                    o.id = r + "coverwrapper", t.appendChild(o), e("#" + r + "coverwrapper").css({
                                        position: "absolute",
                                        overflow: "hidden",
                                        background: "rgba(" + ct(I).r + ", " + ct(I).g + ", " + ct(I).b + ", 0.1)"
                                    }).on("click", function() {
                                        "" != ye && window.open(ye)
                                    }).lunaradiodisableSelection(), (a = document.createElement("div")).id = r + "coverwrapper1", o.appendChild(a), e("#" + r + "coverwrapper1").css({
                                        position: "absolute",
                                        left: "0px",
                                        top: "0px",
                                        height: "100%",
                                        width: "100%",
                                        overflow: "hidden",
                                        transition: "opacity 1s",
                                        opacity: "0.0",
                                        "background-repeat": "no-repeat",
                                        "background-size": "cover"
                                    }), (a = document.createElement("div")).id = r + "coverwrapper2", o.appendChild(a), e("#" + r + "coverwrapper2").css({
                                        position: "absolute",
                                        left: "0px",
                                        top: "0px",
                                        height: "100%",
                                        width: "100%",
                                        overflow: "hidden",
                                        transition: "opacity 1s",
                                        opacity: "0.0",
                                        "background-repeat": "no-repeat",
                                        "background-size": "cover"
                                    }), "circle" == P && (e("#" + r + "coverwrapper, #" + r + "coverwrapper1, #" + r + "coverwrapper2").css({
                                        "border-radius": "50%"
                                    }), e("#" + r + "backgroundimage, #" + r + "backgroundimage1, #" + r + "backgroundimage2").css({
                                        "border-radius": "50%"
                                    }))
                                }(a), (i = document.createElement("div")).id = r + "iconlive", /* a.appendChild(i),*/ e("#" + r + "iconlive").css({
                                    position: "absolute",
                                    fill: "rgba(" + ct(I).r + ", " + ct(I).g + ", " + ct(I).b + ", 0.3)"
                                }).html(y).lunaradiodisableSelection(), (i = document.createElement("div")).id = r + "buttonvolumeoff", a.appendChild(i), e("#" + r + "buttonvolumeoff").css({
                                    position: "absolute",
                                    transition: "fill 0.5s",
                                    cursor: "pointer",
                                    fill: I
                                }).html(b).on("mouseenter", function() {
                                    e(this).css("fill", z)
                                }).on("mouseleave", function() {
                                    e(this).css("fill", I)
                                }).on("click", function() {
                                    ot(0)
                                }).lunaradiodisableSelection(), (i = document.createElement("div")).id = r + "buttonvolumeon", a.appendChild(i), e("#" + r + "buttonvolumeon").css({
                                    position: "absolute",
                                    transition: "fill 0.5s",
                                    cursor: "pointer",
                                    fill: I
                                }).html(x).on("mouseenter", function() {
                                    e(this).css("fill", z)
                                }).on("mouseleave", function() {
                                    e(this).css("fill", I)
                                }).on("click", function() {
                                    ot(100)
                                }).lunaradiodisableSelection(), (i = document.createElement("div")).id = r + "buttonanalyzer", /*a.appendChild(i),*/ e("#" + r + "buttonanalyzer").css({
                                    position: "absolute",
                                    transition: "fill 0.5s",
                                    cursor: "pointer",
                                    fill: I
                                }).html(A).on("mouseenter", function() {
                                    e(this).css("fill", z)
                                }).on("mouseleave", function() {
                                    e(this).css("fill", I)
                                }).on("click", function() {
                                    "none" != e("#" + r + "buttonshuffle").css("pointer-events") && ((V = parseInt(V) + 1) > Ie && (V = 0), dt("changeanalyzer: " + V))
                                }).lunaradiodisableSelection(), (i = document.createElement("span")).classList.add(r + "textradionamespan"), a.appendChild(i), e("." + r + "textradionamespan").css({
                                    "padding-left": "10px",
                                    "padding-right": "10px",
                                    margin: "0",
                                    "white-space": "nowrap",
                                    "font-family": B,
                                    color: I
                                }).html(F), (i = document.createElement("div")).id = r + "textradioname", i.dataset.speed = .5, i.dataset.reverse = !0, a.appendChild(i), e("#" + r + "textradioname").css({
                                    position: "absolute",
                                    overflow: "hidden",
                                    padding: "0",
                                    margin: "0",
                                    "white-space": "nowrap",
                                    "text-align": "center",
                                    "text-overflow": "ellipsis",
                                    "font-family": B,
                                    color: I
                                }).addClass(r + "textradioname").html(e("." + r + "textradionamespan")).lunaradiodisableSelection(), (i = document.createElement("span")).classList.add(r + "texttitlespan"), a.appendChild(i), e("." + r + "texttitlespan").css({
                                    "padding-left": "10px",
                                    "padding-right": "10px",
                                    margin: "0",
                                    "white-space": "nowrap",
                                    "font-family": B,
                                    color: I
                                }).html(""), (i = document.createElement("div")).id = r + "texttitle", i.dataset.speed = .9, a.appendChild(i), e("#" + r + "texttitle").css({
                                    position: "absolute",
                                    overflow: "hidden",
                                    padding: "0",
                                    margin: "0",
                                    "white-space": "nowrap",
                                    "text-align": "center",
                                    "text-overflow": "ellipsis",
                                    "font-family": B,
                                    color: I
                                }).addClass(r + "texttitle").html(e("." + r + "texttitlespan")).lunaradiodisableSelection(), (i = document.createElement("div")).id = r + "textvolumeend", a.appendChild(i), e("#" + r + "textvolumeend").css({
                                    position: "absolute",
                                    "text-align": "center",
                                    "font-family": "Roboto",
                                    color: I
                                }).html("100").lunaradiodisableSelection(),
                                function(t) {
                                    var i = document.createElement("div");
                                    i.id = r + "volumewrapper", t.appendChild(i), e("#" + r + "volumewrapper").css({
                                        position: "absolute"
                                    }).lunaradiodisableSelection();
                                    var a = document.createElement("div");
                                    a.id = r + "volumebackground", i.appendChild(a), e("#" + r + "volumebackground").css({
                                        position: "absolute",
                                        width: "100%",
                                        background: I
                                    }).lunaradiodisableSelection(), (a = document.createElement("div")).id = r + "volumefill", i.appendChild(a), e("#" + r + "volumefill").css({
                                        position: "absolute",
                                        width: "0",
                                        background: z
                                    }).lunaradiodisableSelection(), (a = document.createElement("div")).id = r + "volumeicon", i.appendChild(a), e("#" + r + "volumeicon").css({
                                        position: "absolute",
                                        top: "0px",
                                        "border-radius": "50%",
                                        background: z
                                    }).lunaradiodisableSelection(), (a = document.createElement("img")).id = r + "volumegrab", i.appendChild(a), a.src = C, e("#" + r + "volumegrab").css({
                                        position: "absolute",
                                        top: "0px",
                                        left: "0px",
                                        cursor: "pointer",
                                        height: "100%",
                                        width: "100%",
                                        padding: "0",
                                        margin: "0"
                                    }).mouseover(function(t) {
                                        e(this).css("cursor", k)
                                    }).lunaradiograb({
                                        onstart: function(t) {
                                            e(this).css("cursor", S), de = le
                                        },
                                        onmove: function(t) {
                                            var i = 100 * t.offset.x / e("#" + r + "volumewrapper").width();
                                            le = de + i < 100 ? de + i : 100, de + i < 0 && (le = 0), Qe(le)
                                        },
                                        onfinish: function(t) {
                                            e(this).css("cursor", k)
                                        }
                                    })
                                }(a),
                                function(t) {
                                    var i = document.createElement("div");
                                    i.id = r + "pauseplaywrapper", t.appendChild(i), e("#" + r + "pauseplaywrapper").css({
                                        position: "absolute",
                                        cursor: "pointer"
                                    }).on("click", function() {
                                        We(), ce ? Je() : Ke()
                                    }).lunaradiodisableSelection();
                                    var a = document.createElement("div");
                                    a.id = r + "buttonplay", i.appendChild(a), e("#" + r + "buttonplay").css({
                                        position: "absolute",
                                        top: "0px",
                                        left: "0px",
                                        width: "100%",
                                        height: "100%",
                                        transition: "fill 0.5s",
                                        fill: I
                                    }).html(w).on("mouseenter", function() {
                                        e(this).css("fill", z)
                                    }).on("mouseleave", function() {
                                        e(this).css("fill", I)
                                    }).lunaradiodisableSelection(), (a = document.createElement("div")).id = r + "buttonpause", i.appendChild(a), e("#" + r + "buttonpause").css({
                                        position: "absolute",
                                        top: "0px",
                                        left: "0px",
                                        width: "100%",
                                        height: "100%",
                                        transition: "fill 0.5s",
                                        fill: I
                                    }).html(g).on("mouseenter", function() {
                                        e(this).css("fill", z)
                                    }).on("mouseleave", function() {
                                        e(this).css("fill", I)
                                    }).fadeOut(0).lunaradiodisableSelection(), (a = document.createElement("div")).id = r + "audiopreloader", i.appendChild(a), e("#" + r + "audiopreloader").css({
                                        position: "absolute",
                                        top: "0px",
                                        left: "0px",
                                        width: "100%",
                                        height: "100%",
                                        fill: I
                                    }).html(v).fadeOut(0).lunaradiodisableSelection()
                                }(a), rt() ? (le = 100, Qe(100)) : ot(ae)
                        }(a) : function(t) {
                            dt("iniSmallPlayer");
                            var i = document.createElement("div");
                            i.id = r + "smallplayerwrapper", t.appendChild(i), e("#" + r + "smallplayerwrapper").css({
                                overflow: "hidden",
                                position: "absolute",
                                left: "0px",
                                top: "0px",
                                height: "100%",
                                width: "100%"
                            });
                            var a = document.createElement("div");
                            a.id = r + "smallvolumebackground", i.appendChild(a), e("#" + r + "smallvolumebackground").css({
                                    position: "absolute",
                                    top: "0px",
                                    left: "0px",
                                    width: "100%",
                                    height: "100%",
                                    background: "rgba(" + ct(z).r + ", " + ct(z).g + ", " + ct(z).b + ", 0.5)"
                                }).lunaradiodisableSelection(), (a = document.createElement("div")).id = r + "smalliconlive", i.appendChild(a), e("#" + r + "smalliconlive").css({
                                    position: "absolute",
                                    fill: "rgba(" + ct(I).r + ", " + ct(I).g + ", " + ct(I).b + ", 0.3)"
                                }).html(y).lunaradiodisableSelection(), (a = document.createElement("div")).id = r + "smalltextvolume", i.appendChild(a), e("#" + r + "smalltextvolume").css({
                                    position: "absolute",
                                    "text-align": "right",
                                    "font-family": "Roboto",
                                    color: "rgba(" + ct(I).r + ", " + ct(I).g + ", " + ct(I).b + ", 0.3)"
                                }).html("100").lunaradiodisableSelection(), (a = document.createElement("div")).id = r + "smalliconvolume", i.appendChild(a), e("#" + r + "smalliconvolume").css({
                                    position: "absolute",
                                    fill: "rgba(" + ct(I).r + ", " + ct(I).g + ", " + ct(I).b + ", 0.3)"
                                }).html(x).lunaradiodisableSelection(), (a = document.createElement("span")).classList.add(r + "smalltextradionamespan"), i.appendChild(a), e("." + r + "smalltextradionamespan").css({
                                    "padding-right": "30px",
                                    margin: "0",
                                    "white-space": "nowrap",
                                    "font-family": B,
                                    color: I
                                }).html(F), (a = document.createElement("div")).id = r + "smalltextradioname", a.dataset.speed = .5, a.dataset.reverse = !0, i.appendChild(a), e("#" + r + "smalltextradioname").css({
                                    position: "absolute",
                                    overflow: "hidden",
                                    padding: "0 0 10px 0",
                                    "white-space": "nowrap",
                                    "text-align": "left",
                                    "text-overflow": "ellipsis",
                                    "font-family": B,
                                    color: I
                                }).addClass(r + "smalltextradioname").html(e("." + r + "smalltextradionamespan")).lunaradiodisableSelection(), (a = document.createElement("span")).classList.add(r + "smalltexttitlespan"), i.appendChild(a), e("." + r + "smalltexttitlespan").css({
                                    "padding-right": "30px",
                                    margin: "0",
                                    "white-space": "nowrap",
                                    "font-family": B,
                                    color: I
                                }).html(""), (a = document.createElement("div")).id = r + "smalltexttitle", a.dataset.speed = .7, i.appendChild(a), e("#" + r + "smalltexttitle").css({
                                    position: "absolute",
                                    overflow: "hidden",
                                    padding: "0 0 10px 0",
                                    "white-space": "nowrap",
                                    "text-align": "left",
                                    "text-overflow": "ellipsis",
                                    "font-family": B,
                                    color: I
                                }).addClass(r + "smalltexttitle").html(e("." + r + "smalltexttitlespan")).lunaradiodisableSelection(), (a = document.createElement("div")).id = r + "smallvolumegrab", i.appendChild(a), e("#" + r + "smallvolumegrab").css({
                                    position: "absolute",
                                    top: "0px",
                                    left: "0px",
                                    cursor: "pointer",
                                    height: "100%",
                                    width: "100%",
                                    padding: "0",
                                    margin: "0"
                                }).mouseover(function(t) {
                                    e(this).css("cursor", k)
                                }).lunaradiograb({
                                    onstart: function(t) {
                                        e(this).css("cursor", S), de = le
                                    },
                                    onmove: function(t) {
                                        var i = 100 * t.offset.x / e("#" + r + "smallvolumegrab").width();
                                        le = de + i < 100 ? de + i : 100, de + i < 0 && (le = 0), Ge(le)
                                    },
                                    onfinish: function(t) {
                                        e(this).css("cursor", k)
                                    }
                                }).lunaradiodisableSelection(),
                                function(t) {
                                    var i = document.createElement("div");
                                    i.id = r + "smallpauseplaywrapper", t.appendChild(i), e("#" + r + "smallpauseplaywrapper").css({
                                        position: "absolute",
                                        cursor: "pointer"
                                    }).on("click", function() {
                                        We(), ce ? Je() : Ke()
                                    }).lunaradiodisableSelection();
                                    var a = document.createElement("div");
                                    a.id = r + "smallbuttonplay", i.appendChild(a), e("#" + r + "smallbuttonplay").css({
                                        position: "absolute",
                                        top: "0px",
                                        left: "0px",
                                        width: "100%",
                                        height: "100%",
                                        transition: "fill 0.5s",
                                        fill: I
                                    }).html(w).on("mouseenter", function() {
                                        e(this).css("fill", z)
                                    }).on("mouseleave", function() {
                                        e(this).css("fill", I)
                                    }).lunaradiodisableSelection(), (a = document.createElement("div")).id = r + "smallbuttonpause", i.appendChild(a), e("#" + r + "smallbuttonpause").css({
                                        position: "absolute",
                                        top: "0px",
                                        left: "0px",
                                        width: "100%",
                                        height: "100%",
                                        transition: "fill 0.5s",
                                        fill: I
                                    }).html(g).on("mouseenter", function() {
                                        e(this).css("fill", z)
                                    }).on("mouseleave", function() {
                                        e(this).css("fill", I)
                                    }).fadeOut(0).lunaradiodisableSelection(), (a = document.createElement("div")).id = r + "smallaudiopreloader", i.appendChild(a), e("#" + r + "smallaudiopreloader").css({
                                        position: "absolute",
                                        top: "0px",
                                        left: "0px",
                                        width: "100%",
                                        height: "100%",
                                        fill: I
                                    }).html(v).fadeOut(0).lunaradiodisableSelection()
                                }(i),
                                function(t) {
                                    var i = document.createElement("div");
                                    i.id = r + "smallcoverwrapper", t.appendChild(i), e("#" + r + "smallcoverwrapper").css({
                                        position: "absolute",
                                        overflow: "hidden",
                                        background: "rgba(" + ct(I).r + ", " + ct(I).g + ", " + ct(I).b + ", 0.1)"
                                    }).on("click", function() {
                                        "" != ye && window.open(ye)
                                    }).lunaradiodisableSelection();
                                    var a = document.createElement("div");
                                    a.id = r + "smallcoverwrapper1", i.appendChild(a), e("#" + r + "smallcoverwrapper1").css({
                                        position: "absolute",
                                        left: "0px",
                                        top: "0px",
                                        height: "100%",
                                        width: "100%",
                                        transition: "opacity 1s",
                                        overflow: "hidden",
                                        opacity: "0.0",
                                        "background-repeat": "no-repeat",
                                        "background-size": "cover"
                                    }), (a = document.createElement("div")).id = r + "smallcoverwrapper2", i.appendChild(a), e("#" + r + "smallcoverwrapper2").css({
                                        position: "absolute",
                                        left: "0px",
                                        top: "0px",
                                        height: "100%",
                                        width: "100%",
                                        overflow: "hidden",
                                        transition: "opacity 1s",
                                        opacity: "0.0",
                                        "background-repeat": "no-repeat",
                                        "background-size": "cover"
                                    }), "circle" == P && e("#" + r + "smallcoverwrapper, #" + r + "smallcoverwrapper1, #" + r + "smallcoverwrapper2").css({
                                        "border-radius": "50%"
                                    })
                                }(i), rt() ? (le = 100, Qe(100)) : (o = ae, e({
                                    countNum: le
                                }).animate({
                                    countNum: Math.floor(o)
                                }, {
                                    duration: 4 * Me,
                                    easing: "linear",
                                    step: function() {
                                        le = this.countNum, Ge(this.countNum)
                                    },
                                    complete: function() {
                                        le = o, Ge(o)
                                    }
                                }));
                            var o
                        }(a);
                        var o;
                        rt() && (e("#" + r + "buttonvolumeoff, #" + r + "buttonvolumeon, #" + r + "volumegrab, #" + r + "textvolumeend, #" + r + "volumewrapper").css({
                            display: "none"
                        }), e("#" + r + "smallvolumegrab, #" + r + "smalltextvolume, #" + r + "smalliconvolume").css({
                            display: "none"
                        }));
                        "ie" == xe.browser.name.toLowerCase() && parseInt(xe.browser.version) < 12 && e("#" + r + "backgroundimage").css({
                            display: "none"
                        });
                        Ze(), e(window).resize(function() {
                            Ze()
                        }), et(), "true" == j ? (j = "false", qe(O, ""), j = "true") : qe(O, "");
                        Le(), setInterval(function() {
                            Le()
                        }, ie)
                    }(), Ae = !0);
                    var a, o, n
                }(o)
        });
        var lt = {
            _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            encode: function(e) {
                var t, i, a, o, n, r, s, l = "",
                    d = 0;
                for (e = lt._utf8_encode(e); d < e.length;) o = (t = e.charCodeAt(d++)) >> 2, n = (3 & t) << 4 | (i = e.charCodeAt(d++)) >> 4, r = (15 & i) << 2 | (a = e.charCodeAt(d++)) >> 6, s = 63 & a, isNaN(i) ? r = s = 64 : isNaN(a) && (s = 64), l = l + this._keyStr.charAt(o) + this._keyStr.charAt(n) + this._keyStr.charAt(r) + this._keyStr.charAt(s);
                return l
            },
            decode: function(e) {
                var t, i, a, o, n, r, s = "",
                    l = 0;
                for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); l < e.length;) t = this._keyStr.indexOf(e.charAt(l++)) << 2 | (o = this._keyStr.indexOf(e.charAt(l++))) >> 4, i = (15 & o) << 4 | (n = this._keyStr.indexOf(e.charAt(l++))) >> 2, a = (3 & n) << 6 | (r = this._keyStr.indexOf(e.charAt(l++))), s += String.fromCharCode(t), 64 != n && (s += String.fromCharCode(i)), 64 != r && (s += String.fromCharCode(a));
                return s = lt._utf8_decode(s)
            },
            _utf8_encode: function(e) {
                e = e.replace(/\r\n/g, "\n");
                for (var t = "", i = 0; i < e.length; i++) {
                    var a = e.charCodeAt(i);
                    a < 128 ? t += String.fromCharCode(a) : a > 127 && a < 2048 ? (t += String.fromCharCode(a >> 6 | 192), t += String.fromCharCode(63 & a | 128)) : (t += String.fromCharCode(a >> 12 | 224), t += String.fromCharCode(a >> 6 & 63 | 128), t += String.fromCharCode(63 & a | 128))
                }
                return t
            },
            _utf8_decode: function(e) {
                for (var t = "", i = 0, a = 0, o = 0, n = 0; i < e.length;)(n = e.charCodeAt(i)) < 128 ? (t += String.fromCharCode(n), i++) : n > 191 && n < 224 ? (a = e.charCodeAt(i + 1), t += String.fromCharCode((31 & n) << 6 | 63 & a), i += 2) : (a = e.charCodeAt(i + 1), o = e.charCodeAt(i + 2), t += String.fromCharCode((15 & n) << 12 | (63 & a) << 6 | 63 & o), i += 3);
                return t
            }
        };

        function dt(t) {
            if ("true" == oe) {
                var i = new Date;
                t = i.getHours() + ":" + i.getMinutes() + ":" + i.getSeconds() + ": " + t, window.console && console.log(t), e("#debug").length > 0 && e("#debug").html(e("#debug").html() + "<br>" + t)
            }
        }

        function ct(e) {
            var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            return t ? {
                r: parseInt(t[1], 16),
                g: parseInt(t[2], 16),
                b: parseInt(t[3], 16)
            } : null
        }
        jQuery.fn.extend({
            lunaradiodisableSelection: function() {
                this.each(function() {
                    this.onselectstart = function() {
                        return !1
                    }, this.onmousedown = function(e) {
                        return !1
                    }, this.unselectable = "on", jQuery(this).css("-moz-user-select", "none"), jQuery(this).css("-webkit-user-select", "none"), jQuery(this).css("-webkit-touch-callout", "none"), jQuery(this).css("-khtml-user-select", "none"), jQuery(this).css("-ms-user-select", "none"), jQuery(this).css("user-select", "none"), jQuery(this).css("tap-highlight-color", "rgba(0, 0, 0, 0)"), jQuery(this).css("-o-tap-highlight-color", "rgba(0, 0, 0, 0)"), jQuery(this).css("-moz-tap-highlight-color", "rgba(0, 0, 0, 0)"), jQuery(this).css("-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)")
                })
            }
        }), this.play = function() {
            Ae && (dt("API CALL: play"), ce || (ce = !0, Ke()))
        }, this.pause = function() {
            Ae && (dt("API CALL: pause"), ce && (ce = !1, Je()))
        }
    }
}),
function(e, t) {
    "use strict";
    var i = "model",
        a = "name",
        o = "type",
        n = "vendor",
        r = "version",
        s = "mobile",
        l = "tablet",
        d = "smarttv",
        c = {
            extend: function(e, t) {
                var i = {};
                for (var a in e) t[a] && t[a].length % 2 == 0 ? i[a] = t[a].concat(e[a]) : i[a] = e[a];
                return i
            },
            has: function(e, t) {
                return "string" == typeof e && -1 !== t.toLowerCase().indexOf(e.toLowerCase())
            },
            lowerize: function(e) {
                return e.toLowerCase()
            },
            major: function(e) {
                return "string" == typeof e ? e.replace(/[^\d\.]/g, "").split(".")[0] : void 0
            },
            trim: function(e) {
                return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            }
        },
        u = {
            rgx: function(e, t) {
                for (var i, a, o, n, r, s, l = 0; l < t.length && !r;) {
                    var d = t[l],
                        c = t[l + 1];
                    for (i = a = 0; i < d.length && !r;)
                        if (r = d[i++].exec(e))
                            for (o = 0; o < c.length; o++) s = r[++a], "object" == typeof(n = c[o]) && n.length > 0 ? 2 == n.length ? "function" == typeof n[1] ? this[n[0]] = n[1].call(this, s) : this[n[0]] = n[1] : 3 == n.length ? "function" != typeof n[1] || n[1].exec && n[1].test ? this[n[0]] = s ? s.replace(n[1], n[2]) : void 0 : this[n[0]] = s ? n[1].call(this, s, n[2]) : void 0 : 4 == n.length && (this[n[0]] = s ? n[3].call(this, s.replace(n[1], n[2])) : void 0) : this[n] = s || void 0;
                    l += 2
                }
            },
            str: function(e, t) {
                for (var i in t)
                    if ("object" == typeof t[i] && t[i].length > 0) {
                        for (var a = 0; a < t[i].length; a++)
                            if (c.has(t[i][a], e)) return "?" === i ? void 0 : i
                    } else if (c.has(t[i], e)) return "?" === i ? void 0 : i;
                return e
            }
        },
        p = {
            browser: {
                oldsafari: {
                    version: {
                        "1.0": "/8",
                        1.2: "/1",
                        1.3: "/3",
                        "2.0": "/412",
                        "2.0.2": "/416",
                        "2.0.3": "/417",
                        "2.0.4": "/419",
                        "?": "/"
                    }
                }
            },
            device: {
                amazon: {
                    model: {
                        "Fire Phone": ["SD", "KF"]
                    }
                },
                sprint: {
                    model: {
                        "Evo Shift 4G": "7373KT"
                    },
                    vendor: {
                        HTC: "APA",
                        Sprint: "Sprint"
                    }
                }
            },
            os: {
                windows: {
                    version: {
                        ME: "4.90",
                        "NT 3.11": "NT3.51",
                        "NT 4.0": "NT4.0",
                        2000: "NT 5.0",
                        XP: ["NT 5.1", "NT 5.2"],
                        Vista: "NT 6.0",
                        7: "NT 6.1",
                        8: "NT 6.2",
                        8.1: "NT 6.3",
                        10: ["NT 6.4", "NT 10.0"],
                        RT: "ARM"
                    }
                }
            }
        },
        h = {
            browser: [
                [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                [a, r],
                [/(opios)[\/\s]+([\w\.]+)/i],
                [
                    [a, "Opera Mini"], r
                ],
                [/\s(opr)\/([\w\.]+)/i],
                [
                    [a, "Opera"], r
                ],
                [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i, /(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],
                [a, r],
                [/(konqueror)\/([\w\.]+)/i],
                [
                    [a, "Konqueror"], r
                ],
                [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                [
                    [a, "IE"], r
                ],
                [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],
                [
                    [a, "Edge"], r
                ],
                [/(yabrowser)\/([\w\.]+)/i],
                [
                    [a, "Yandex"], r
                ],
                [/(Avast)\/([\w\.]+)/i],
                [
                    [a, "Avast Secure Browser"], r
                ],
                [/(AVG)\/([\w\.]+)/i],
                [
                    [a, "AVG Secure Browser"], r
                ],
                [/(puffin)\/([\w\.]+)/i],
                [
                    [a, "Puffin"], r
                ],
                [/(focus)\/([\w\.]+)/i],
                [
                    [a, "Firefox Focus"], r
                ],
                [/(opt)\/([\w\.]+)/i],
                [
                    [a, "Opera Touch"], r
                ],
                [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                [
                    [a, "UCBrowser"], r
                ],
                [/(comodo_dragon)\/([\w\.]+)/i],
                [
                    [a, /_/g, " "], r
                ],
                [/(windowswechat qbcore)\/([\w\.]+)/i],
                [
                    [a, "WeChat(Win) Desktop"], r
                ],
                [/(micromessenger)\/([\w\.]+)/i],
                [
                    [a, "WeChat"], r
                ],
                [/(brave)\/([\w\.]+)/i],
                [
                    [a, "Brave"], r
                ],
                [/(qqbrowserlite)\/([\w\.]+)/i],
                [a, r],
                [/(QQ)\/([\d\.]+)/i],
                [a, r],
                [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                [a, r],
                [/(baiduboxapp)[\/\s]?([\w\.]+)/i],
                [a, r],
                [/(2345Explorer)[\/\s]?([\w\.]+)/i],
                [a, r],
                [/(MetaSr)[\/\s]?([\w\.]+)/i],
                [a],
                [/(LBBROWSER)/i],
                [a],
                [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                [r, [a, "MIUI Browser"]],
                [/;fbav\/([\w\.]+);/i],
                [r, [a, "Facebook"]],
                [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i],
                [a, r],
                [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                [r, [a, "Chrome Headless"]],
                [/\swv\).+(chrome)\/([\w\.]+)/i],
                [
                    [a, /(.+)/, "$1 WebView"], r
                ],
                [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                [
                    [a, /(.+(?:g|us))(.+)/, "$1 $2"], r
                ],
                [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                [r, [a, "Android Browser"]],
                [/(sailfishbrowser)\/([\w\.]+)/i],
                [
                    [a, "Sailfish Browser"], r
                ],
                [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                [a, r],
                [/(dolfin)\/([\w\.]+)/i],
                [
                    [a, "Dolphin"], r
                ],
                [/(qihu|qhbrowser|qihoobrowser|360browser)/i],
                [
                    [a, "360 Browser"]
                ],
                [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                [
                    [a, "Chrome"], r
                ],
                [/(coast)\/([\w\.]+)/i],
                [
                    [a, "Opera Coast"], r
                ],
                [/fxios\/([\w\.-]+)/i],
                [r, [a, "Firefox"]],
                [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                [r, [a, "Mobile Safari"]],
                [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                [r, a],
                [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                [
                    [a, "GSA"], r
                ],
                [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                [a, [r, u.str, p.browser.oldsafari.version]],
                [/(webkit|khtml)\/([\w\.]+)/i],
                [a, r],
                [/(navigator|netscape)\/([\w\.-]+)/i],
                [
                    [a, "Netscape"], r
                ],
                [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                [a, r]
            ],
            cpu: [
                [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                [
                    ["architecture", "amd64"]
                ],
                [/(ia32(?=;))/i],
                [
                    ["architecture", c.lowerize]
                ],
                [/((?:i[346]|x)86)[;\)]/i],
                [
                    ["architecture", "ia32"]
                ],
                [/windows\s(ce|mobile);\sppc;/i],
                [
                    ["architecture", "arm"]
                ],
                [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                [
                    ["architecture", /ower/, "", c.lowerize]
                ],
                [/(sun4\w)[;\)]/i],
                [
                    ["architecture", "sparc"]
                ],
                [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                [
                    ["architecture", c.lowerize]
                ]
            ],
            device: [
                [/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],
                [i, n, [o, l]],
                [/applecoremedia\/[\w\.]+ \((ipad)/],
                [i, [n, "Apple"],
                    [o, l]
                ],
                [/(apple\s{0,1}tv)/i],
                [
                    [i, "Apple TV"],
                    [n, "Apple"],
                    [o, d]
                ],
                [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                [n, i, [o, l]],
                [/(kf[A-z]+)\sbuild\/.+silk\//i],
                [i, [n, "Amazon"],
                    [o, l]
                ],
                [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
                [
                    [i, u.str, p.device.amazon.model],
                    [n, "Amazon"],
                    [o, s]
                ],
                [/android.+aft([bms])\sbuild/i],
                [i, [n, "Amazon"],
                    [o, d]
                ],
                [/\((ip[honed|\s\w*]+);.+(apple)/i],
                [i, n, [o, s]],
                [/\((ip[honed|\s\w*]+);/i],
                [i, [n, "Apple"],
                    [o, s]
                ],
                [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                [n, i, [o, s]],
                [/\(bb10;\s(\w+)/i],
                [i, [n, "BlackBerry"],
                    [o, s]
                ],
                [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],
                [i, [n, "Asus"],
                    [o, l]
                ],
                [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                [
                    [n, "Sony"],
                    [i, "Xperia Tablet"],
                    [o, l]
                ],
                [/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                [i, [n, "Sony"],
                    [o, s]
                ],
                [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                [n, i, [o, "console"]],
                [/android.+;\s(shield)\sbuild/i],
                [i, [n, "Nvidia"],
                    [o, "console"]
                ],
                [/(playstation\s[34portablevi]+)/i],
                [i, [n, "Sony"],
                    [o, "console"]
                ],
                [/(sprint\s(\w+))/i],
                [
                    [n, u.str, p.device.sprint.vendor],
                    [i, u.str, p.device.sprint.model],
                    [o, s]
                ],
                [/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
                [n, [i, /_/g, " "],
                    [o, s]
                ],
                [/(nexus\s9)/i],
                [i, [n, "HTC"],
                    [o, l]
                ],
                [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i],
                [i, [n, "Huawei"],
                    [o, s]
                ],
                [/android.+(bah2?-a?[lw]\d{2})/i],
                [i, [n, "Huawei"],
                    [o, l]
                ],
                [/(microsoft);\s(lumia[\s\w]+)/i],
                [n, i, [o, s]],
                [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                [i, [n, "Microsoft"],
                    [o, "console"]
                ],
                [/(kin\.[onetw]{3})/i],
                [
                    [i, /\./g, " "],
                    [n, "Microsoft"],
                    [o, s]
                ],
                [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                [i, [n, "Motorola"],
                    [o, s]
                ],
                [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                [i, [n, "Motorola"],
                    [o, l]
                ],
                [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                [
                    [n, c.trim],
                    [i, c.trim],
                    [o, d]
                ],
                [/hbbtv.+maple;(\d+)/i],
                [
                    [i, /^/, "SmartTV"],
                    [n, "Samsung"],
                    [o, d]
                ],
                [/\(dtv[\);].+(aquos)/i],
                [i, [n, "Sharp"],
                    [o, d]
                ],
                [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                [
                    [n, "Samsung"], i, [o, l]
                ],
                [/smart-tv.+(samsung)/i],
                [n, [o, d], i],
                [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i],
                [
                    [n, "Samsung"], i, [o, s]
                ],
                [/sie-(\w*)/i],
                [i, [n, "Siemens"],
                    [o, s]
                ],
                [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
                [
                    [n, "Nokia"], i, [o, s]
                ],
                [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
                [i, [n, "Acer"],
                    [o, l]
                ],
                [/android.+([vl]k\-?\d{3})\s+build/i],
                [i, [n, "LG"],
                    [o, l]
                ],
                [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                [
                    [n, "LG"], i, [o, l]
                ],
                [/(lg) netcast\.tv/i],
                [n, i, [o, d]],
                [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i],
                [i, [n, "LG"],
                    [o, s]
                ],
                [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],
                [n, i, [o, l]],
                [/android.+(ideatab[a-z0-9\-\s]+)/i],
                [i, [n, "Lenovo"],
                    [o, l]
                ],
                [/(lenovo)[_\s-]?([\w-]+)/i],
                [n, i, [o, s]],
                [/linux;.+((jolla));/i],
                [n, i, [o, s]],
                [/((pebble))app\/[\d\.]+\s/i],
                [n, i, [o, "wearable"]],
                [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                [n, i, [o, s]],
                [/crkey/i],
                [
                    [i, "Chromecast"],
                    [n, "Google"],
                    [o, d]
                ],
                [/android.+;\s(glass)\s\d/i],
                [i, [n, "Google"],
                    [o, "wearable"]
                ],
                [/android.+;\s(pixel c)[\s)]/i],
                [i, [n, "Google"],
                    [o, l]
                ],
                [/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],
                [i, [n, "Google"],
                    [o, s]
                ],
                [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],
                [
                    [i, /_/g, " "],
                    [n, "Xiaomi"],
                    [o, s]
                ],
                [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
                [
                    [i, /_/g, " "],
                    [n, "Xiaomi"],
                    [o, l]
                ],
                [/android.+;\s(m[1-5]\snote)\sbuild/i],
                [i, [n, "Meizu"],
                    [o, s]
                ],
                [/(mz)-([\w-]{2,})/i],
                [
                    [n, "Meizu"], i, [o, s]
                ],
                [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})[\s)]/i],
                [i, [n, "OnePlus"],
                    [o, s]
                ],
                [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                [i, [n, "RCA"],
                    [o, l]
                ],
                [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
                [i, [n, "Dell"],
                    [o, l]
                ],
                [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                [i, [n, "Verizon"],
                    [o, l]
                ],
                [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
                [
                    [n, "Barnes & Noble"], i, [o, l]
                ],
                [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                [i, [n, "NuVision"],
                    [o, l]
                ],
                [/android.+;\s(k88)\sbuild/i],
                [i, [n, "ZTE"],
                    [o, l]
                ],
                [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                [i, [n, "Swiss"],
                    [o, s]
                ],
                [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                [i, [n, "Swiss"],
                    [o, l]
                ],
                [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                [i, [n, "Zeki"],
                    [o, l]
                ],
                [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],
                [
                    [n, "Dragon Touch"], i, [o, l]
                ],
                [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
                [i, [n, "Insignia"],
                    [o, l]
                ],
                [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
                [i, [n, "NextBook"],
                    [o, l]
                ],
                [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
                [
                    [n, "Voice"], i, [o, s]
                ],
                [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
                [
                    [n, "LvTel"], i, [o, s]
                ],
                [/android.+;\s(PH-1)\s/i],
                [i, [n, "Essential"],
                    [o, s]
                ],
                [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
                [i, [n, "Envizen"],
                    [o, l]
                ],
                [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
                [n, i, [o, l]],
                [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
                [i, [n, "MachSpeed"],
                    [o, l]
                ],
                [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
                [n, i, [o, l]],
                [/android.+[;\/]\s*TU_(1491)\s+build/i],
                [i, [n, "Rotor"],
                    [o, l]
                ],
                [/android.+(KS(.+))\s+build/i],
                [i, [n, "Amazon"],
                    [o, l]
                ],
                [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
                [n, i, [o, l]],
                [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                [
                    [o, c.lowerize], n, i
                ],
                [/[\s\/\(](smart-?tv)[;\)]/i],
                [
                    [o, d]
                ],
                [/(android[\w\.\s\-]{0,9});.+build/i],
                [i, [n, "Generic"]]
            ],
            engine: [
                [/windows.+\sedge\/([\w\.]+)/i],
                [r, [a, "EdgeHTML"]],
                [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                [r, [a, "Blink"]],
                [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                [a, r],
                [/rv\:([\w\.]{1,9}).+(gecko)/i],
                [r, a]
            ],
            os: [
                [/microsoft\s(windows)\s(vista|xp)/i],
                [a, r],
                [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                [a, [r, u.str, p.os.windows.version]],
                [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                [
                    [a, "Windows"],
                    [r, u.str, p.os.windows.version]
                ],
                [/\((bb)(10);/i],
                [
                    [a, "BlackBerry"], r
                ],
                [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen|kaios)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],
                [a, r],
                [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
                [
                    [a, "Symbian"], r
                ],
                [/\((series40);/i],
                [a],
                [/mozilla.+\(mobile;.+gecko.+firefox/i],
                [
                    [a, "Firefox OS"], r
                ],
                [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i],
                [a, r],
                [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                [
                    [a, "Chromium OS"], r
                ],
                [/(sunos)\s?([\w\.\d]*)/i],
                [
                    [a, "Solaris"], r
                ],
                [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
                [a, r],
                [/(haiku)\s(\w+)/i],
                [a, r],
                [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
                [
                    [r, /_/g, "."],
                    [a, "iOS"]
                ],
                [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
                [
                    [a, "Mac OS"],
                    [r, /_/g, "."]
                ],
                [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i],
                [a, r]
            ]
        },
        m = function(t, i) {
            if ("object" == typeof t && (i = t, t = void 0), !(this instanceof m)) return new m(t, i).getResult();
            var a = t || (e && e.navigator && e.navigator.userAgent ? e.navigator.userAgent : ""),
                o = i ? c.extend(h, i) : h;
            return this.getBrowser = function() {
                var e = {
                    name: void 0,
                    version: void 0
                };
                return u.rgx.call(e, a, o.browser), e.major = c.major(e.version), e
            }, this.getCPU = function() {
                var e = {
                    architecture: void 0
                };
                return u.rgx.call(e, a, o.cpu), e
            }, this.getDevice = function() {
                var e = {
                    vendor: void 0,
                    model: void 0,
                    type: void 0
                };
                return u.rgx.call(e, a, o.device), e
            }, this.getEngine = function() {
                var e = {
                    name: void 0,
                    version: void 0
                };
                return u.rgx.call(e, a, o.engine), e
            }, this.getOS = function() {
                var e = {
                    name: void 0,
                    version: void 0
                };
                return u.rgx.call(e, a, o.os), e
            }, this.getResult = function() {
                return {
                    ua: this.getUA(),
                    browser: this.getBrowser(),
                    engine: this.getEngine(),
                    os: this.getOS(),
                    device: this.getDevice(),
                    cpu: this.getCPU()
                }
            }, this.getUA = function() {
                return a
            }, this.setUA = function(e) {
                return a = e, this
            }, this
        };
    m.VERSION = "0.7.21", m.BROWSER = {
        NAME: a,
        MAJOR: "major",
        VERSION: r
    }, m.CPU = {
        ARCHITECTURE: "architecture"
    }, m.DEVICE = {
        MODEL: i,
        VENDOR: n,
        TYPE: o,
        CONSOLE: "console",
        MOBILE: s,
        SMARTTV: d,
        TABLET: l,
        WEARABLE: "wearable",
        EMBEDDED: "embedded"
    }, m.ENGINE = {
        NAME: a,
        VERSION: r
    }, m.OS = {
        NAME: a,
        VERSION: r
    }, "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = m), exports.LUNARADIOParser = m) : "function" == typeof define && define.amd ? define(function() {
        return m
    }) : e && (e.LUNARADIOParser = m);
    var f = e && (e.jQuery || e.Zepto);
    if (f && !f.ua) {
        var g = new m;
        f.ua = g.getResult(), f.ua.get = function() {
            return g.getUA()
        }, f.ua.set = function(e) {
            g.setUA(e);
            var t = g.getResult();
            for (var i in t) f.ua[i] = t[i]
        }
    }
}("object" == typeof window ? window : this),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : e.jQuery ? t(e.jQuery) : t(e.Zepto)
}(this, function(e, t) {
    "use strict";
    e.fn.lunaradioMarquee = function(i) {
        var a = "lunaradioMarquee",
            o = "string" == typeof i,
            n = Array.prototype.slice.call(arguments, 1),
            r = this;
        return i = !o && n.length ? e.extend.apply(null, [!0, i].concat(n)) : i, o && "_" === i.charAt(0) ? r : (o ? this.each(function() {
            var o = e(this).data(a),
                s = o && e.isFunction(o[i]) ? o[i].apply(o, n) : o;
            if (s !== o && s !== t) return r = s, !1
        }) : this.each(function() {
            e(this).data(a, new e.lunaradioMarquee(this, i))
        }), r)
    }, e.lunaradioMarquee = function(e, t) {
        var i, a, o = 0,
            n = 0,
            r = e.dataset.speed || .25,
            s = e.dataset.reverse,
            l = e.parentElement.getBoundingClientRect(),
            d = e.children[0];
        d.innerHTML;

        function c() {
            const e = d.cloneNode(!0);
            e.style.display = "inline-block", i.appendChild(e)
        }

        function u() {
            (s ? n < 0 : n > -1 * a) ? n -= r * (s ? -1 : 1): n = s ? -1 * a : 0, i.style.whiteSpace = "nowrap", i.style.transform = "translate(" + n + "px, 0) translateZ(0)", window.requestAnimationFrame(u) || window.mozRequestAnimationFrame(u) || window.webkitRequestAnimationFrame(u) || window.msRequestAnimationFrame(u) || window.oRequestAnimationFrame(u)
        }

        function p() {
            o && window.cancelAnimationFrame(o), u()
        }(i = document.createElement("div")).style.whiteSpace = "nowrap",
            function() {
                d.style.display = "inline-block", a = d.offsetWidth, a > l.width ? 2 : Math.ceil((l.width - a) / a) + 1;
                for (var t = 0; t < 20; t++) c();
                s && (n = -1 * a);
                e.classList.add("is-init")
            }(), i.appendChild(d), e.appendChild(i), p(), this.play = function() {
                p()
            }, this.pause = function() {
                o && window.cancelAnimationFrame(o)
            }
    }
}),
function(e) {
    "use strict";
    var t = e.extend,
        i = "mousedown",
        a = "mousemove",
        o = "mouseup",
        n = "touchstart",
        r = "touchmove",
        s = "touchend";

    function l(t, i, a) {
        if ("touch" !== i.substr(0, 5)) return e(t).unbind(i, a);
        var o;
        for (o = 0; o < d._binds.length; o++) d._binds[o].elem === t && d._binds[o].type === i && d._binds[o].func === a && (document.addEventListener ? t.removeEventListener(i, d._binds[o].fnc, !1) : t.detachEvent("on" + i, d._binds[o].fnc), d._binds.splice(o--, 1))
    }

    function d(t, i, a, o) {
        return "touch" !== i.substr(0, 5) ? e(t).bind(i, o, a) : d[i] ? d[i].bind(t, i, a, o) : (n = function(e) {
            e || (e = window.event), e.stopPropagation || (e.stopPropagation = function() {
                this.cancelBubble = !0
            }), e.data = o, a.call(t, e)
        }, document.addEventListener ? t.addEventListener(i, n, !1) : t.attachEvent("on" + i, n), void d._binds.push({
            elem: t,
            type: i,
            func: a,
            fnc: n
        }));
        var n
    }

    function c(e) {
        e.data.position.x = e.pageX, e.data.position.y = e.pageY, e.data.start.x = e.pageX, e.data.start.y = e.pageY, e.data.event = e, e.data.onstart && e.data.onstart.call(e.data.element, e.data) || (e.preventDefault && e.data.preventDefault && e.preventDefault(), e.stopPropagation && e.data.stopPropagation && e.stopPropagation(), d(e.data.affects, a, u, e.data), d(e.data.affects, o, p, e.data))
    }

    function u(e) {
        e.preventDefault && e.data.preventDefault && e.preventDefault(), e.stopPropagation && e.data.preventDefault && e.stopPropagation(), e.data.move.x = e.pageX - e.data.position.x, e.data.move.y = e.pageY - e.data.position.y, e.data.position.x = e.pageX, e.data.position.y = e.pageY, e.data.offset.x = e.pageX - e.data.start.x, e.data.offset.y = e.pageY - e.data.start.y, e.data.event = e, e.data.onmove && e.data.onmove.call(e.data.element, e.data)
    }

    function p(e) {
        e.preventDefault && e.data.preventDefault && e.preventDefault(), e.stopPropagation && e.data.stopPropagation && e.stopPropagation(), l(e.data.affects, a, u), l(e.data.affects, o, p), e.data.event = e, e.data.onfinish && e.data.onfinish.call(e.data.element, e.data)
    }

    function h(e) {
        e.data.position.x = e.touches[0].pageX, e.data.position.y = e.touches[0].pageY, e.data.start.x = e.touches[0].pageX, e.data.start.y = e.touches[0].pageY, e.data.event = e, e.data.onstart && e.data.onstart.call(e.data.element, e.data) || (e.preventDefault && e.data.preventDefault && e.preventDefault(), e.stopPropagation && e.data.stopPropagation && e.stopPropagation(), d(e.data.affects, r, m, e.data), d(e.data.affects, s, f, e.data))
    }

    function m(e) {
        e.preventDefault && e.data.preventDefault && e.preventDefault(), e.stopPropagation && e.data.stopPropagation && e.stopPropagation(), e.data.move.x = e.touches[0].pageX - e.data.position.x, e.data.move.y = e.touches[0].pageY - e.data.position.y, e.data.position.x = e.touches[0].pageX, e.data.position.y = e.touches[0].pageY, e.data.offset.x = e.touches[0].pageX - e.data.start.x, e.data.offset.y = e.touches[0].pageY - e.data.start.y, e.data.event = e, e.data.onmove && e.data.onmove.call(e.data.elem, e.data)
    }

    function f(e) {
        e.preventDefault && e.data.preventDefault && e.preventDefault(), e.stopPropagation && e.data.stopPropagation && e.stopPropagation(), l(e.data.affects, r, m), l(e.data.affects, s, f), e.data.event = e, e.data.onfinish && e.data.onfinish.call(e.data.element, e.data)
    }
    d._binds = [], e.fn.lunaradiograb = function(e, a) {
        return this.each(function() {
            return a = this, o = e, r = {
                move: {
                    x: 0,
                    y: 0
                },
                offset: {
                    x: 0,
                    y: 0
                },
                position: {
                    x: 0,
                    y: 0
                },
                start: {
                    x: 0,
                    y: 0
                },
                affects: document.documentElement,
                stopPropagation: !1,
                preventDefault: !1,
                touch: !0
            }, t(r, o), r.element = a, d(a, i, c, r), void(r.touch && d(a, n, h, r));
            var a, o, r
        })
    }, e.fn.lunaradioungrab = function(e) {
        return this.each(function() {
            l(this, i, i)
        })
    }
}(jQuery)