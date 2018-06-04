const List = require('./index.js').LinkedList;
const expect = require('chai').expect;


describe("GetLast", () => {
  it('Should return the last element', () => {
    const l = new List();
    l.insertFirst(2);
    expect(l.getLast()).to.eql({
      data: 2,
      next: null
    });
    l.insertFirst(1);
    expect(l.getLast()).to.eql({
      data: 2,
      next: null
    })
  })
});

describe('Clear', () => {
  it('Should empty out the list', () => {
    const l = new List();
    expect(l.size()).to.eql(0)
    l.insertFirst(1);
    l.insertFirst(1);
    l.insertFirst(1);
    l.insertFirst(1);
    expect(l.size()).to.eql(4)
    l.clear();
    expect(l.size()).to.eql(0);
  })
});

describe('Remove First', () => {
  it('Should remove the first Element from the list', () => {
    const l = new List();
    l.insertFirst('a');
    l.removeFirst();
    expect(l.size()).to.eql(0)
    expect(l.getFirst()).to.be.null;
  });
});

describe('RemoveLast', () => {
  it('Should Remove the last element in the list', () => {
    const l = new List();
    l.insertFirst('a');
    l.insertFirst('b');


    l.removeLast();

    expect(l.size()).to.eql(1);
    expect(l.head.data).to.eql('b')
  });
});

describe('InsertLast', () => {
  it('Should add element to the end of the list', () => {
    const l = new List();
    l.insertFirst('a');
    l.insertFirst('b');


    l.insertLast('c');

    expect(l.size()).to.eql(3);
    expect(l.getLast().data).to.eql('c')
  });
});

describe('Insert 1 element at the Last', () => {
  it('Should add 1 element to the end of the list', () => {
    const l = new List();

    l.insertLast('d');

    expect(l.size()).to.eql(1);
    expect(l.getLast().data).to.eql('d')
  });
});

describe('Get At', () => {
  it('Should return the node at a given index', () => {
    const l = new List();
    expect(l.getLast(10)).to.be.null;

    l.insertLast(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);

    expect(l.getAt(0).data).to.eql(1);
    expect(l.getAt(1).data).to.eql(2);
    expect(l.getAt(2).data).to.eql(3);
  });
});

describe('Remove At', () => {
  it('Should remove and not crash', () => {
    const l = new List();
    expect(() => {
      l.removeAt(0);
      l.removeAt(1);
      l.removeAt(2);
    }).not.to.Throw();
  });

  it('Should remove at an index and not crash', () => {
    const l = new List();
    expect(() => {
      const l = new List();
      l.insertFirst('a');
      l.removeAt(1);
    }).not.to.Throw();
  });

  it('Should remove the first node', () => {
    const l = new List();
    l.insertLast(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);
    expect(l.getAt(0).data).to.eql(1);
    l.removeAt(0);
    expect(l.getAt(0).data).to.eql(2);
  });
});

describe('Insert At', () => {
  it('Should insert a new node with data at 0 index when the list is empty', () => {
    const l = new List();
    l.insertAt('hi', 0),
      expect(l.getFirst().data).to.eql('hi');
  });

  it('Should insert a new node with data at 0 index when the list is not empty', () => {
    const l = new List();
    l.insertLast('a');
    l.insertLast('b');
    l.insertLast('c');
    l.insertAt('hi', 0);
    expect(l.getAt(0).data).to.eql('hi');
    expect(l.getAt(1).data).to.eql('a');
    expect(l.getAt(2).data).to.eql('b');
    expect(l.getAt(3).data).to.eql('c');
  });

  it('Should insert a new node with data at a middle index', () => {
    const l = new List();
    l.insertFirst('a');
    l.insertLast('b');
    l.insertLast('c');
    l.insertLast('d');
    l.insertAt('hi', 2);

    expect(l.getAt(0).data).to.eql('a');
    expect(l.getAt(1).data).to.eql('b');
    expect(l.getAt(2).data).to.eql('hi');
    expect(l.getAt(3).data).to.eql('c');
    expect(l.getAt(4).data).to.eql('d');
  });
});

describe('ForEach', () => {
  it('Applies a transform to each node', () => {
    const l = new List();

    l.insertLast(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);

    l.forEach(node => {
      node.data += 10;
    })

    expect(l.getAt(0).data).to.eql(11);
    expect(l.getAt(1).data).to.eql(12);
    expect(l.getAt(2).data).to.eql(13);
    expect(l.getAt(3).data).to.eql(14);
  });
});