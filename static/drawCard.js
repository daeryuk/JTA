let selectedCards = [];
const cardContainer = document.querySelector('.card-container');
const selectedCardContainer = document.querySelector('.selected-card-container');
const submitButton = document.getElementById('submit-button');
const cards = {
  //메이저 타로카드(The Major Arcana)
  1: { name: "The Fool", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdfeWrV%2Fbtq1ca9uYNF%2FGmABVtkbrkAjyGpCYT49d0%2Fimg.jpg" },
  2: { name: "The Magician", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FOGLzZ%2Fbtq0iBs7MnT%2F6iWlEKEQpoDkSIOLn1DR0k%2Fimg.jpg" },
  3: { name: "The High Priestess", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FChGFu%2Fbtq1cahoKkH%2FvsYJbooKvdPkM1J4BS1GLk%2Fimg.jpg" },
  4: { name: "The Empress", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FHNNpX%2Fbtq1jlCaCyG%2FBTdlDsUsmLDhoEkdbdUFI1%2Fimg.jpg" },
  5: { name: "The Emperor", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FA2DiX%2Fbtq1laG972S%2FvJ2JKAzenjoDxJEe3xRKS1%2Fimg.jpg" },
  6: { name: "The Hierophant", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FDpGNs%2Fbtq1ataRGD2%2FJ2M7pQ5MKWxLxaytI6aFG1%2Fimg.jpg" },
  7: { name: "The Lovers", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcJKj27%2Fbtq1bgoAsaR%2FxWt7gq0M9uAKapKthSKGM1%2Fimg.jpg" },
  8: { name: "The Chariot", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbp9OKC%2Fbtq1aQRdiTr%2FzDrpzKzLB5Ct7GeBYtKJeK%2Fimg.jpg" },
  9: { name: "Strength", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FRDQCW%2Fbtq1e6S4flP%2F6pSlssLmPGwO6RYCQgMK9K%2Fimg.jpg" },
  10: { name: "The Hermit", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdElKFo%2Fbtq1lb0mqtg%2FxCSThBpc5e8P86IJfhk0AK%2Fimg.jpg" },
  11: { name: "Wheel of Fortune", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb3Kcg7%2Fbtq1jl91coJ%2FhePSscjUK6KuKrIlKSkBP0%2Fimg.jpg" },
  12: { name: "Justice", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FRVfss%2Fbtq1jlhRU8m%2FbGOgvW2UNRXKoGEneox73K%2Fimg.jpg" },
  13: { name: "The Hanged Man", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbfaTnS%2Fbtq1e66BFXR%2FoaXyZkl6lIMULK5wvmoCt0%2Fimg.jpg" },
  14: { name: "Death", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FHDaVW%2Fbtq1b9v1eaU%2Fkzi7BpV1EBHhPioKKoxEG1%2Fimg.jpg" },
  15: { name: "Temperance", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbuSCzy%2Fbtq1e6MhD1C%2F5RgHtx5ssPHrtRGLutaYr1%2Fimg.jpg" },
  16: { name: "The Devil", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb3Cgp2%2Fbtq1g9os3JA%2FPd0Cjy1wnTSFfg3VPnCrPk%2Fimg.jpg" },
  17: { name: "The Tower", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FGYm4b%2Fbtq1as36ijb%2Fmr77r07kdb7bS6U60JJHCk%2Fimg.jpg" },
  18: { name: "The Star", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbzA7mG%2Fbtq1jla6sAO%2FI4MSqd10WIhTy3JpsSVSx0%2Fimg.jpg" },
  19: { name: "The Moon", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F9QrHf%2Fbtq1aQDFcMt%2FdLxm2fjktkOVyGxdg6ZmAk%2Fimg.jpg" },
  20: { name: "The Sun", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fc2dfTD%2Fbtq1laUGi4e%2F7T7PFrkTy44Pcz4feN58qK%2Fimg.jpg" },
  21: { name: "Judgement", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbk9zKS%2Fbtq1laG980c%2FyXqo2xbu7ICl6p5DKykrwk%2Fimg.jpg" },
  22: { name: "The World", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FuJSql%2Fbtq090fI9lk%2F2hMBPywKe1kTVTqKTk2If1%2Fimg.jpg" },
  // 마이너 타로카드(The Minor Arcana)
  //지팡이
  23: { name: "The Ace of Wands", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FpNrOw%2Fbtq1haVcQyz%2F6BJvL7cjA2LUAaxVtfFVwk%2Fimg.jpg" },
  24: { name: "The Two of Wands", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbfHCk2%2Fbtq1g9WjgoQ%2FHZl2cjzRk3RtURy2OEtpC0%2Fimg.jpg" },
  25: { name: "The Three of Wands", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqB5Qn%2Fbtq1e7dluKB%2F6IXWyGfoRCcY2ROoOgGz20%2Fimg.jpg" },
  26: { name: "The Four of Wands", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FmPHvR%2Fbtq1lbsxaMh%2FoQFbIEPkGWkXSJfDRBu4xk%2Fimg.jpg" },
  27: { name: "The Five of Wands", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fl3PbR%2Fbtq1dyWBEDG%2FaPpDz5bECrkiBkzKhdTfDk%2Fimg.jpg" },
  28: { name: "The Six of Wands", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbi62W7%2Fbtq1e7RZyUE%2F77MMd3ws5zrepz5EA2EaSk%2Fimg.jpg" },
  29: { name: "The Seven of Wands", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FE7oZL%2Fbtq1jkDe47D%2Fajr2KFV7oEFlexvtRgoJek%2Fimg.jpg" },
  30: { name: "The Eight of Wands", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FsnOXN%2Fbtq1jkJ1XCF%2FMuJv7ir2se5FeS6KX91Ib1%2Fimg.jpg" },
  31: { name: "The Nine of Wands", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdJfJwP%2Fbtq1e7YKcOS%2FS2cCEWOfKJjXikEjBALBuK%2Fimg.jpg" },
  32: { name: "The Ten of Wands", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdbOhZ2%2Fbtq1bfb7zR4%2FXPjKovdnvlBBh3iuk49PE0%2Fimg.jpg" },
  33: { name: "The Page of Wands", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FRtqQ3%2Fbtq1aswfraZ%2FFatizzhYT5QcNa5FhFrLx1%2Fimg.jpg" },
  34: { name: "The Knight of Wands", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fc0djgJ%2Fbtq1e6ZP0KJ%2FQGvGk6JOkyKEH7cIW6kiLK%2Fimg.jpg" },
  35: { name: "The Queen of Wands", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcUxMze%2Fbtq1b9CKaXi%2FDQiV2v7EphCxxmSr0KcacK%2Fimg.jpg" },
  36: { name: "The King of Wands", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FZKKnQ%2Fbtq091yVQsb%2FEfnbQT2OuHQjU9fPW5hAk1%2Fimg.jpg" },
  //컵
  37: { name: "The Ace of Cups", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcGgvL8%2Fbtq1bga3hd2%2FlCkCQGaUkLvIzCFMilSrQK%2Fimg.jpg" },
  38: { name: "The Two of Cups", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FkKRxU%2Fbtq1hbfuNON%2F1drLmxwxAptdsU0A5j7a0k%2Fimg.jpg" },
  39: { name: "The Three of Cups", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbxIvXt%2Fbtq1augzisy%2F7heaVKVbz8JlMMA6mqDbL0%2Fimg.jpg" },
  40: { name: "The Four of Cups", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb2xIGf%2Fbtq1asQBdK5%2FneRweKB83LEg1cBrJWjtX0%2Fimg.jpg" },
  41: { name: "The Five of Cups", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbcadVC%2Fbtq1jlvo8Xu%2FpAOxGX3B9FCklF54cYLg7k%2Fimg.jpg" },
  42: { name: "The Six of Cups", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fl53Nf%2Fbtq1bga3hnd%2Fjrq5qbzBJY1W8scCs5W251%2Fimg.jpg" },
  43: { name: "The Seven of Cups", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FsURVl%2Fbtq1la8dQEC%2FkXAlk1Ic3a8FYy4CkypoK0%2Fimg.jpg" },
  44: { name: "The Eight of Cups", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FRkSxt%2Fbtq090NAcfG%2FhJPBBJrwwGfhFtkoJxQJB0%2Fimg.jpg" },
  45: { name: "The Nine of Cups", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdV0CRv%2Fbtq1haHFpmZ%2FxFqDZnacySv9neTJA7C0X0%2Fimg.jpg" },
  46: { name: "The Ten of Cups", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FU1FKZ%2Fbtq1aut56QN%2FAhma9CUZSYipfoKWwmePq0%2Fimg.jpg" },
  47: { name: "The Page of Cups", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcjF4XD%2Fbtq1asJUB7M%2F0iooBaKykAgx42GjMKDzGk%2Fimg.jpg" },
  48: { name: "The Knight of Cups", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcFVC1g%2Fbtq1caBF5uc%2FriXVXmorm8YXlkGsffVW70%2Fimg.jpg" },
  49: { name: "The Queen of Cups", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbrEfHG%2Fbtq1ha8LEM6%2FFhjDqG3qp1FPKK28hUW8XK%2Fimg.jpg" },
  50: { name: "The King of Cups", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbat5Bp%2Fbtq1g9aVO9p%2FKetthHFyRSy17jztF6MDn0%2Fimg.jpg" },
  //검
  51: { name: "The Ace of Swords", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fr9GLg%2Fbtq1g9aVPE8%2FYuC5TKACpi3mODW9LY5Iok%2Fimg.jpg" },
  52: { name: "The Two of Swords", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FC5MUA%2Fbtq1hannk7N%2FaepvukOQu4lHw1BnQ0vjTk%2Fimg.jpg" },
  53: { name: "The Three of Swords", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbFXru1%2Fbtq1dyCiSg2%2F1Tk6g4EANjdHEr5r5R8WWK%2Fimg.jpg" },
  54: { name: "The Four of Swords", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FBiRPC%2Fbtq1dzHZbNw%2FzL69v6BSkSKFOE9UtbEkek%2Fimg.jpg" },
  55: { name: "The Five of Swords", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fl9Dcu%2Fbtq1bgoAFXI%2F3XR8tQgD38hB4b5S9XJ2JK%2Fimg.jpg" },
  56: { name: "The Six of Swords", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbmdDMS%2Fbtq1laHaeK4%2F9NramP1dCdCxSWwIBFiNe1%2Fimg.jpg" },
  57: { name: "The Seven of Swords", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FowP0E%2Fbtq1e8ciPpO%2FZAeCOWtcLu7ML0msV9lzQ1%2Fimg.jpg" },
  58: { name: "The Eight of Swords", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcgMe0d%2Fbtq1jkJ12I7%2Ff9JtcjeoO32rzbr21MvjYk%2Fimg.jpg" },
  59: { name: "The Nine of Swords", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbBAjSX%2Fbtq1dzOK0TL%2FSNIFN7vENLjQ5psgfCOLhK%2Fimg.jpg" },
  60: { name: "The Ten of Swords", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fdyjo3a%2Fbtq1ha1X6xi%2FonMdqGj18kVsK4kP5cch3K%2Fimg.jpg" },
  61: { name: "The Page of Swords", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FZWwzH%2Fbtq1bfDfc3f%2FKMRprzJbLbRJKxC4xcGPvk%2Fimg.jpg" },
  62: { name: "The Knight of Swords", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FuMee4%2Fbtq1dzOK0Xg%2F9aNFhD1uKeDunTqV1w8ER0%2Fimg.jpg" },
  63: { name: "The Queen of Swords", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fd5AXGG%2Fbtq1beRRe2p%2FCYmrqVOT2zIsmOC6uBlhO0%2Fimg.jpg" },
  64: { name: "The King of Swords", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdRrmAb%2Fbtq1ha1X6Rh%2F7Txok3ApxV0P2rvHSp9cb0%2Fimg.jpg" },
  //펜타클
  65: { name: "The Ace of Pentacles", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F5kpUs%2Fbtq1asJUFFY%2FVKR8q1tvcLU3ilpQyu0gb1%2Fimg.jpg" },
  66: { name: "The Two of Pentacles", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbAhuaX%2Fbtq1can7vuz%2FZEXbaaqdBlhOrWrvUjoutK%2Fimg.jpg" },
  67: { name: "The Three of Pentacles", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F5cL75%2Fbtq1dyvAYQd%2FRBuILZUxfQ8oKWxbo7Z7h0%2Fimg.jpg" },
  68: { name: "The Four of Pentacles", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbksziH%2Fbtq1aSapno9%2FiQ3dbD85f81X7FGNKCwU01%2Fimg.jpg" },
  69: { name: "The Five of Pentacles", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fdr7mco%2Fbtq1aswfzRC%2FOsewRBD2KCbqMFBtL8KXn1%2Fimg.jpg" },
  70: { name: "The Six of Pentacles", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbuhykY%2Fbtq1dAmzvgn%2F4iQnsKb0RlBVNjQ05ApkV0%2Fimg.jpg" },
  71: { name: "The Seven of Pentacles", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FNm1iw%2Fbtq1asC3M2c%2FnUt0el9M09N9ho9xQ04KK0%2Fimg.jpg" },
  72: { name: "The Eight of Pentacles", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcKYpfo%2Fbtq1lbMPtDU%2FOTf5kS702js90GoXgcnr1K%2Fimg.jpg" },
  73: { name: "The Nine of Pentacles", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcU0gpB%2Fbtq1laf5FD7%2Fg63aZn8KxZPNP52watv0o0%2Fimg.jpg" },
  74: { name: "The Ten of Pentacles", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FeuOIvU%2Fbtq1aR3EiGC%2Fqzweh9JBZmzk8crUGXkm31%2Fimg.jpg" },
  75: { name: "The Page of Pentacles", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcBtFUR%2Fbtq1e8pOoGe%2F6xXNdaXIl7n6YvOF31Vfm1%2Fimg.jpg" },
  76: { name: "The Knight of Pentacles", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fblo6zd%2Fbtq1jl91i4Z%2FeR6sj8ic33Pp698skYRKU1%2Fimg.jpg" },
  77: { name: "The Queen of Pentacles", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbbPFFw%2Fbtq1bfXySKg%2FvJ12R9A3SE6696BYVZ2kv1%2Fimg.jpg" },
  78: { name: "The King of Pentacles", image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdA3Xa6%2Fbtq1bgoAH8j%2F6CYVXH4Xx2egQvk1cTwdzk%2Fimg.jpg" }
};

// 카드를 생성하는 함수
function createCard(id) {
  const card = document.createElement('div');
  card.classList.add('card', 'hidden'); // 카드를 처음에는 뒷면이 보이도록 설정
  card.dataset.id = id; // 카드 id는 배정해주어야 함

  // 카드 클릭 이벤트 핸들러 추가
  card.addEventListener('click', () => selectCard(card));

  return card;
}


// 카드를 셔플하는 함수
function shuffleCards() {
  const cardElements = document.querySelectorAll('.card');
  const cardArray = Array.from(cardElements);

  for (let i = cardArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cardArray[i], cardArray[j]] = [cardArray[j], cardArray[i]];
  }

  const cardContainer = document.querySelector('.card-container');
  cardArray.forEach(card => {
    cardContainer.appendChild(card);
  });
}

// 카드를 화면에 차례로 나타나게 하는 함수
function revealCards() {
  const cards = Array.from(document.querySelectorAll('.card'));

  cards.forEach((card, index) => {
      setTimeout(() => {
          card.classList.add('appear');
      }, index * 50); // 각 카드가 50ms 간격으로 나타나도록 설정
  });
}

// 카드를 선택하는 함수
function selectCard(card) {
  if (selectedCards.length < 3 && !card.classList.contains('selected')) {
      card.classList.add('selected');
      selectedCards.push(cards[card.dataset.id]); // 카드의 텍스트를 배열에 추가
      updateSelectedCards();
  }
}

// 선택된 카드를 업데이트하는 함수
function updateSelectedCards() {
  selectedCardContainer.innerHTML = '';
  selectedCards.forEach(card => {
    const selectedCard = document.createElement('div');
    selectedCard.className = 'selected-card';
    selectedCard.style.backgroundImage = `url(${card.image})`;
    selectedCard.style.backgroundSize = 'cover';
    
    const cardTitle = document.createElement('div');
    cardTitle.className = 'card-title';
    cardTitle.textContent = card.name;
    
    selectedCard.appendChild(cardTitle);
    selectedCardContainer.appendChild(selectedCard);
  });

  document.getElementById('cards-input').value = selectedCards.map(card => card.name).join(', ');
}

// 카드 생성 및 초기화
for (let i = 1; i <= 78; i++) {
  const card = createCard(i);
  cardContainer.appendChild(card);
}

// 카드 셔플
shuffleCards();

// 카드가 순차적으로 나타나도록 트리거
setTimeout(revealCards, 100);

// 선택 완료 버튼 클릭 시
submitButton.addEventListener('click', (event) => {
  if (selectedCards.length !== 3) {
      event.preventDefault();
      alert('카드를 3장 선택하세요.');
  }
});
