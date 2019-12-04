import {createGlobalStyle} from 'styled-components';

export const Iconfont = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1574069796185'); /* IE9 */
  src: url('./iconfont.eot?t=1574069796185#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAA5kAAsAAAAAGOgAAA4XAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCFOAqhAJoSATYCJANICyYABCAFhG0HgXsbixQzozaLtPIl+z8kT8WSD9YdZGuiQNDGgm873VuRrvBpAs0IgtG05/j3V2Y7ohat6C+6oqrhiVTRKKFesztiq2OGUsLD/37zvuf/PcQbPyHWoHIIlUSC1HRJtPS1ZQ1leZ5F89qGx239GwPHiJFiklZTRkKf0TMarMIEL7mKmld4Fcndz/BXwvPfX+y8f9/s7KxFmqRBFEFU4IthAinGX1agAEjz9fl93fr7IjJ2WNDxxu+zrmhawpWEV1LkEDZhjFfovO/UpGRHUsuGAcDXAbFspTtKSscwkn+ld3+CUIFiGgEEwvrHuU/7Wd0I7BG4E2ZgTdOPSdO//3qY9t+Ac5xx/hCEnJrQEyrtAbMbCbUpIadTR1n8baFkmqkPsvvurQ7OC1oAP6eHAEEqGnT7yC0FK00gAo88sdUCVkcNHXJM8GnLGLaB+DD8mD9uAU7pvxcHOBcVIJkAod/pw9AErhMc9+Htf5+7zk5+DHgbCRQYAGiIH9O5AzHwgBqBJbczIMXmlp6bYFJevYlIZNDKhqv1yTd/fwV33+MJuzgvcO9dBUdIxYvLvAFREUNelq7F//IUkAiBYTleArEAYmQQfmktAq9ArkLEKyXKojwAGVA+gDyoN4AsqAiABpUAUKAZAHKgWgAF0GwAEhQHIEBrAQTQT1AFg8+/q2DxFQw4Su8B8KD3YZMQjJKqx+lmirmv2C+Sd0RXluFoklpPhrG45CixTCKcGMzxMNlCGYoqyGQBG2IyGEzUy8uNjGj0ngCdjjK4XJ4XWUXD6LpD3ZGfj4uajQoZHCWThcUjsLiRCpofU+JDxljs1oUMvXjmRU8p90NjHP9Gy/2JyOquQy41Y7sP/64PW/Z5x4dW0XDsJ304qs7x1KF0zPFm0nm0khyOZpNiTLa40q9F1XiF37pt6Tp4d/6skXuPdx95sOih0fv/dCsFMufXJoctePCoRV5I1p5+TU5DmTXm3y6uHUhdQ9mO12xQMytUWKpWPyIWc041XgZM/nbkQXCf32X3qCixIk+CdIu2yDt6uliyPTvja1lUtpfph4HmEgDyUJDwCMxisTtQUBhTU4EPBTmSpZ9rgzO/lRobFIbCpa15e2DTr9cJ20AvNZYUZ8v15HzTKcOploeCSihmiuLTvFb+OYrcatFGw6vXv4yLdGQftNn8vJbMhZVUxACwaHOlFiZiFm0ZzPjZ4Z+7hjJe9meIAQYIINgBB/6OtYO2Y22QHusEHRoH+tk/+drl5tKp1pvi2AoKKapIt+P11/hxhwDPnMB2FNwcmP4wbdgtFg8IPZKzvm9WigjeyvG6kv/5bvwjZ4LT/CQ79Xz20XyaB16caeBYlr8ufGB0sOkfb25stbB4/bnaYcQzGehjuk4pfOTMokA76+L5ZTPt+GlF+dHAmsFntthQl1JH8yg7/RohbuXlYNwg0pK4W7SVXdBZbNwBDk2l348KA4UwTEYEdb7l5T31tM+xif10C4sQYsRTLOKOb8mjRy+ih9Asfvn4ccchEvGk7NImRN3MMYa+7m1ue+3U9PlViwA8iwHDbUFLNLYUTy5HoB7vxewkX+sfraNsUL8JSpDhzWdIxE8H6+h+H6La6ckzq3LJT4IzYk1+Kk6x1Wzm1HeD3Nbe3IImCAA0of0Zf6cvS0iBOKoN7e/SOtDm2YxyeUhGqIMnTtakLgbTVgTYSHwIi3XpomA0WQnb333zW+xYPIB4AqvYzkkLyA1JZmORzoPa/1mBEi7UlN+HMDA4PDQHMIU7hYHQ8NfQdxk5PfVimIhfWAIzVMVo2vFJdH8dNXhLf40vzzOJRuMS03hhBotwUJxKUB6/GOnKQFPO5aXTT70wF0rJW0Q6/ju+SxKr6JYOWSuvCmZ3qlc716HH4LlOERejXAe3WCn6b9xSGl54JraI9DdsymnnOav0MP9YqGT9bcZFMFDXrPwUQu3X5zLH7YDZbUcNzQlcrABgqtF6v2R1mSzza8x6Ml9hCKAk+wMawjYu2XTD3rzFnq/gaC2lPQe9BxDAn0uJ2rh2Nvu4gr7SsRXt4Yl5X2FTtEC1tsjCd33KphY0lol9P/P8QrrgcxOFo+rKelrafQILszUxXZPxmCKwPogJCGaHStxno3Lz2yr2PPzExJ3Bj0oNpdHBw1uCuiTxjclzG7/VOcv+nmv9R2XDbYsf4n/Psf6rX1pGm21lKGcMX8T/0B1pnz/9/q6/uM1P/kLmvZc3dfi5gh/qnm8uwD2K/QGa56YebYwgfw6SZypVDTKvY16yhtcfVnVJo9rmpn1vLhw8j28dJ8/hN8+SR+7phL/mclZN+x91K37+XEVz02ou7GlMKBpz/LDgcVA9x7n23Z3zitQjEGuc7yA6K+nupaedeFFZcVkRHj6JOe5HH9hfkCp/fvqT7yKuXps0cc81vbcGnRs+40vN1BkrY7gBBZPQc7xz6OQ30jaMGyjDlrCsH2MRcaXxFMqPUa6PGd+7WeZDIp7md6gTOyRkELduWBae2MQGnM05XfGG6+poKL+tNa9T0KVhnaNMu+5ItDou/VTlW2OzPrOq+nYASaeTDyeyvloi3PJK9GqLcMlXAPitgW/fhiO1FgjH4Fu3U2vQee2m2fARF4y7s46MzSbxqmuMNGsm6nLNRtkt0D6oNdjO3ccd5hRw5gbNlckKoCz+jVtsb0wwuJ+fE2omrCm+2XQSEM+i8AU4jkcBHvE8sixSIqVMB+AgTAlirxK1hRKb0Ygg5WULfJ55t9nbx2hs8Pi8Ru3zc3nqL8Ehy7/LfBqMRh9/GaaDNZKW0JYwws4/41NdbBIQPONJ4CmdwZk2bRc0p3/WBcfzBS+mTSBapvmkZT4R7/ki6dQaxGkuyN3N/WsCPWwkqYuhq17p7szMnmZ+81hwpZy1qaArq/Dh//0LUtM4sgRBlB9KnvvzVbbbOo7Ee/YQM8TtR0FMxoYrv9XNVOi0yoml4o/dHs+C5G33K1f2aYZ0JyqqTQODun7NyuPlJ6a8a6SSqI0jr3cerzgxqGPZmzFo3+wh3dbM6vMT3ZzydsAG2RonvUmQA7tq6+XLvfq+nsyMk+knBrQS2TMXJ9wcaE5JP+nfaLFlPeyWvMnneNPN/kzGSR8ISFtejeGY0xqqGx4mRAbxBpttbkli0dQAkA2ES1d72+1twwQbKxZuHHBKNdVODBdGVe2zWAmhQURYLZ8IJeFCwmLdx34C45h7cjva1+UCQBaUQdNs65UAzVq7Q6bElbLurrxqqfKrtYLj5cxXysPJ6+5ijmh3rAUaSe82jZfyiG2opjaqeSdI+6mHbEeU/4XUQVOnQnWXpI0SJKzIKhFCJb29JSQ29vZCh1vJMge6CbUvly+303E4XAfmCoAA+AAK7SmSnW2zVQsipCoPMtS+45R/zUwuJse4zE05wUcl4eofzoTznpyN4YV8O4pwPz2rDqf+zJ9AeJ/cP1toD+c+vasOL3nEZSaIPsIysPHTH4k/Oi0YJb/zYzV+hElZYpYUA++C4xXxh1CC2hAM76G56Vn0sgjEriQdrq+Hlp9gmWVmludvkBkGx8+cPbOxcnjm/q1b164lhs6NjZ1hg5SfJ0y7mBoZ1f2T9eTo5hnz9AMpc1z8ozOtcg405wj/2IyWo1E8WvPq5qOr/RpXWuQga/T+elLm6WUaOA0vs5v3HL9eT3aor1qi+WjL6sm09B93/9teeP16rv9/7eppmSdq0iKjT9aAdOuloRVqF9+lXjG047LgMq1t6JE0UIENYgpaELN5CAsKlGMLWFy6Qq1dxVpY4TjE4pwA2NRax8IY+9d/id9/tKBi5CALeH0jypGvvxa9xzZUOA6Ol6Ls/6NVIwtiHH8G+GrYwCKoZAoSU/BYEB5ONz+rpXNbglq5MI/My/bP5lEYMElKgrOpo5wzaKGQ2woYY5Z8ZD1rPcKg8LJsdufCy/vx0uokEI8sbaGe4ZyxiegtyD4qarZt6H1Fbv+0CUHTP/r9q6ZwUTLZaz+Vj6zzlvgLTn68HhH7q+iF/AZ6aAoqchIcgrzG57TzZmBlYMHlFuzyr3ujbgVOXyTeR00u6ttU660po2u2JCOnEZJzE+LvOT4GbaT+xoEg6n6HcFSFTlMDNLkCAHSUCjwIV+MkOHcwzXMJAJ69uQJX8/m38yusEj7ORVgMhC7hVtLnAHhe5xAc5mwqI42S4IsTo6TpZC9L8FzKDjgF+W9zB67Jnxa7gdpb3mW5Fxzn2Hv85n+Ti9Q0s7+M0fY4Qxh9atAd5x/0ryLtNx8fLnzz+OduME3kdwNPBmUFnghkGwY3donfhFBb6m9CaNL60HI018KSu2BjEobOffJfToP3ZZvV2LFnIGbVKpacerHiNfw6PCg2olGx5U2Kgz7TyFFZvxCNAuiZ/VIsFBwulnJusGKF72ONsLvYqPk+ZXGo4OJgVrxxRq11C09fHRQCtSoXhRWTVr2c6o9+g/G2cCTB9/YPbkAmlYTxf/snELg8BhhGk4popR136uOlH7CWVe+4hUrCBm39Oor0x4Bhxd3qFLw6KEQtXyvlUh0rJv11OfX8/W8w3hYu5I0/1f/BDfj9SiIUx/B/GhTrjXWRh9GkhDCt5Ocdd8oHYWDFFlZ6dlctVBJqUvB+LSJf0nGNsHyzm/omE/EtwsaXaldRNd0wLdtxPV/IuqnbunM4iAW1eCi+14/u1zju4/SSbRu/4KH2RGCvNkxm26AQlWakYw00R7TNzZLMJpM5OoYGM/bwBakqaA4/T0iag5F/OBBfAZmchP3Sm2RPmejeS2HOfG+5qAON1h7YYgF3k1/KUkIoseCNz8c+Em/ZwWoF') format('woff2'),
  url('./iconfont.woff?t=1574069796185') format('woff'),
  url('./iconfont.ttf?t=1574069796185') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1574069796185#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  font-weight: bold;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`