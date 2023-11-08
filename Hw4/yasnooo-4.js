class PaginationHelper {
    itemsPerPage;
    collection;

    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }

    itemCount() {
        return this.collection.length;
    }

    pageCount() {
        let counter = 1;
        let length = this.itemCount();
        if (length === 0) {
            return 0;
        }
        while (length > this.itemsPerPage) {
            length -= this.itemsPerPage;
            counter++;
        }
        return counter;
    }

    pageItemCount(pageIndex) {
        let pg_count = this.pageCount(this.length)
        let length = this.itemCount();

        if (pageIndex + 1 > pg_count || pageIndex < 0) {
            return -1;
        } else if (pageIndex + 1 < pg_count) {
            return this.itemsPerPage;
        } else if (pageIndex + 1 === pg_count) {
            if (length % this.itemsPerPage === 0) {
                return this.itemsPerPage
            } else {
                return length % this.itemsPerPage;
            }
        }
    }

    pageIndex(itemIndex) {
        let length = this.itemCount();
        if (itemIndex >= 0 && itemIndex < length) {
            return Math.floor(itemIndex / this.itemsPerPage);
        } else {
            return -1;
        }
    }
}

let collection = [];
for (let i = 0; i < 50; i++) {
    collection[i] = i;
}

let helper = new PaginationHelper(collection, 63)
console.log(helper.itemCount());
console.log(helper.pageCount());
console.log(helper.pageItemCount(0));
console.log(helper.pageIndex(3));