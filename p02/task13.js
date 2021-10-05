let books = [
  {
    author: 'Marijn Haverbeke',
    title: 'Eloquent JavaScript, Third Edition',
    yearOfPublish: 2018,
    publisher: 'No Starch Press'
  },
  {
    title: 'Practical Modern JavaScript',
    author: 'Nicolás Bevacqua',
    yearOfPublish:2017,
    publisher: 'O\'Reilly Media',
  },
  {
    title: 'Understanding ECMAScript 6',
    author: 'Nicholas C. Zakas',
    yearOfPublish:2016,
    publisher: 'No Starch Press',
  },
  {
    title: 'Speaking JavaScript',
    author: 'Axel Rauschmayer',
    yearOfPublish:2014,
    publisher: 'O\'Reilly Media',
  },
  {
    title: 'Learning JavaScript Design Patterns',
    author: 'Addy Osmani',
    yearOfPublish:2012,
    publisher: 'O\'Reilly Media',
  },
  {
    title: 'You Don\'t Know JS Yet',
    author: 'Kyle Simpson',
    yearOfPublish:2020,
    publisher: 'Independently published',
  },
  {
    title: 'Pro Git',
    author: 'Scott Chacon and Ben Straub',
    yearOfPublish:2014,
    publisher: 'Apress; 2nd edition',
  },
  {
    title: 'Rethinking Productivity in Software Engineering',
    author: 'Caitlin Sadowski, Thomas Zimmermann',
    yearOfPublish:2019,
    publisher: 'Apress',
  }
]


// a)
let t13aYearFilter = document.querySelector('#t13aYearFilter');
let t13aResult = document.querySelector('#t13aResult');

t13aYearFilter.addEventListener('keyup', () => {
  let result = '';

  let filteredBooks = books.filter(b => b.yearOfPublish === parseInt(t13aYearFilter.value));
  if (filteredBooks.length > 0) {
    result = '<li>' +  filteredBooks.map(b => b.title).join('</li><li>') + '</li>';
  }

  t13aResult.innerHTML = result
})

// b)
let t13bPublisherFilter = document.querySelector('#t13bPublisherFilter');
t13bPublisherFilter.innerHTML = getOptionsForSelect();
let t13bResult = document.querySelector('#t13bResult');

t13bPublisherFilter.addEventListener('change', () => {
  let result = '';

  let filteredBooks = books.filter(b => b.publisher === t13bPublisherFilter.value);
  if (filteredBooks.length > 0) {
    result = '<li>' +  filteredBooks.map(b => b.title).sort().join('</li><li>') + '</li>';
  }

  t13bResult.innerHTML = result;
})
function getOptionsForSelect() {
  let publishers = books.map(b => b.publisher)
                        .filter((v, i, a) => a.indexOf(v) === i)
                        .sort();
  let optionsInnerHtml = '<option value=""> - </option>';
  publishers.forEach((publisher) => {
    optionsInnerHtml += '<option value="' + publisher + '">' + publisher + '</option>';
  })
  return optionsInnerHtml;
}

// c)
let t13cTitleFilter = document.querySelector('#t13cTitleFilter');
let t13cResult = document.querySelector('#t13cResult');

t13cTitleFilter.addEventListener('keyup', () => {
  let result = '';

  let filteredBooks = books.filter(b => b.title.toLowerCase().indexOf(t13cTitleFilter.value.toLowerCase()) !== -1);
  if (filteredBooks.length > 0) {
    result = '<li>' +  filteredBooks.map(b => b.title).sort().join('</li><li>') + '</li>';
  }

  t13cResult.innerHTML = result
})



// a+b+c
let t13allInYearFilter = document.querySelector('#t13allInYearFilter');
let t13allInPublisherFilter = document.querySelector('#t13allInPublisherFilter');
let t13allInTitleFilter = document.querySelector('#t13allInTitleFilter');
let t13allInResult = document.querySelector('#t13allInResult');
t13allInPublisherFilter.innerHTML = getOptionsForSelect();

t13allInYearFilter.addEventListener('keyup', doFilter);
t13allInPublisherFilter.addEventListener('change', doFilter);
t13allInTitleFilter.addEventListener('keyup', doFilter);

function doFilter() {
  let year = parseInt(t13allInYearFilter.value);
  let publisher = t13allInPublisherFilter.value;
  let title = t13allInTitleFilter.value;
  
  let filteredBooks = books;
  filteredBooks = filterByYear(filteredBooks, year);
  filteredBooks = filterByPublisher(filteredBooks, publisher);
  filteredBooks = filterByTitle(filteredBooks, title);

  filteredBooks = sortBooksByTitle(filteredBooks);
  t13allInResult.innerHTML = generateOutput(filteredBooks);
}

function filterByYear(books, year) {
  if (!year) {
    return books;
  }

  return books.filter(b => b.yearOfPublish === year);
}

function filterByPublisher(books, publisher) {
  if (!publisher) {
    return books;
  }

  return books.filter(b => b.publisher === publisher);
}

function filterByTitle(books, title) {
  if (!title) {
    return books;
  }

  return books.filter(b => b.title.toLowerCase().indexOf(title.toLowerCase()) !== -1);
}

function sortBooksByTitle(books) {
  return books.sort((bookA, bookB) => {
    if (bookA.title > bookB.title) {
      return 1; 
    }
    else if (bookB.title > bookA.title) {
      return -1; 
    }
    else {
      return 0;
    }
  });
}

function generateOutput(books) {
  let innerHtml = '';
  books.forEach((book) => {
    innerHtml += '<tr>';
    innerHtml += '<td>' + book.title + '</td>';
    innerHtml += '<td>' + book.author + '</td>';
    innerHtml += '<td>' + book.yearOfPublish + '</td>';
    innerHtml += '<td>' + book.publisher + '</td>';
    innerHtml += '</tr>';

  })
  return innerHtml;
}

doFilter();