//nakshiiiiiiiiiii

//codes for index.html
let allBooks = [];
const search_bar = document.querySelector('.showcase-top .search .input input');
const search_results = document.getElementById('search_results');
const suggbox = document.querySelector('.showcase-top .autocom-box');
//loading books infos from the json file


allBooks = [
  { "titleBN": "পথের পাঁচালী", "titleEN": "Pather Panchali: Song of the Road", "author": "Bibhutibhushan Bandyopadhyay", "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1333334811l/617097.jpg" },
  { "titleBN": "শ্রীকান্ত", "titleEN": "Srikanta", "author": " Sarat Chandra Chattopadhyay", "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1264018282l/7620710.jpg" },
  { "titleBN": "গোরা", "titleEN": "Gora", "author": "Rabindranath Tagore", "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1182381908l/1268541.jpg" },
  { "titleBN": "দেবদাস", "titleEN": "Devdas", "author": "Sarat Chandra Chattopadhyay", "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1617561508l/258497._SX318_.jpg" },
  { "titleBN": "চোখের বালি", "titleEN": "Chokher Bali", "author": "Rabindranath Tagore", "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1213413783l/115030.jpg" },
  { "titleBN": "শেষের কবিতা", "titleEN": "Sesher Kobita, The Last Poem", "author": "Rabindranath Tagore", "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1182381893l/1268536.jpg" },
  { "titleBN": "সাতকাহন", "titleEN": "Satkahon", "author": "Samaresh Majumdar", "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1502772311l/36043851._SX318_.jpg" },
  { "titleBN": "হিমু", "titleEN": "Himu", "author": "Humayun Ahmed", "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1413112198l/12359970.jpg" },
  { "titleBN": "দীপু নাম্বার টু", "titleEN": "Dipu Number Two", "author": "Muhammed Zafar Iqbal", "cover": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1515501735l/37879872.jpg" }

]




//searching for a book
search_bar.addEventListener('keyup', () => {
  const searchString = search_bar.value.toLowerCase();


  const filteredBooks = allBooks.filter((book) => {
    return (
      book.titleEN.toLowerCase().includes(searchString) ||
      book.titleBN.toLowerCase().includes(searchString) ||
      book.author.toLowerCase().includes(searchString)
    );
  });
  displayBooks(filteredBooks);

  let allList = suggbox.querySelectorAll("li");
  //setting atrribute li to all values of li
  for (let i = 0; i < allList.length; i++) {
    allList[i].setAttribute("onclick", "select(this)");
  }




  function select(element) {
    let selectBookTitle = element.titleBN
    let selectBookAuthor = element.author;
    let selectBookCover = element.cover;
    console.log(selectBookAuthor);
    console.log(selectBookCover);
    console.log(selectBookTitle);
  }






  //displaying results

  function displayBooks(books) {
    const htmlString = books.map((book) => {
      return `
        <li>
        <h2>${book.titleBN}</h2>
        <h3>${book.author}</h3>
        <img src="${book.cover}">
        </li>
        
        `;
    })
      .join('');
    search_results.innerHTML = htmlString;
  }






});






