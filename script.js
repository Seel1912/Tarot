const tarotCards = [
    {
        id: 1,
        name: "The Fool",
        image: "./Img/1.jpg",
        description: "The Fool cũng thể hiện niềm tin tuyệt đối rằng cuộc sống là tốt đẹp và đầy những thứ đáng tin cậy. Một số ý kiến có thể cho rằng The Fool quá ngây thơ, nhưng chính sự hồn nhiên đó là thứ giúp anh tồn tại và mang đến cho anh niềm vui thú. Trong một trải bài, The Fool có thể là tín hiệu cho một khởi đầu mới hay một sự đổi hướng – thứ sẽ dẫn lối bạn đến với cuộc phiêu lưu, tìm hiểu và từ đó phát triển bản thân. Anh ấy cũng nhắc chúng ta hãy giữ vững niềm tin và tin vào những phản hồi của tự nhiên. Nếu bạn đang phải đối mặt với một quyết định hay một khoảnh khắc nhiều nghi ngờ, thì The Fool hàm ý bảo bạn hãy tin vào bản thân và để trái tim dẫn lối dù điều đó có thể điên rồ đến mức nào đi nữa."
    },
    {
        id: 2,
        name: "The Magician",
        image: "./Img/2.jpg",
        description: "Trong quẻ bài, The Magician ngụ ý rằng những thế lực nguyên thủy của tính sáng tạo là của bạn nếu bạn có thể bắt lấy sức mạnh của mình và hành động với nhận thức và tập trung. Lá bài này là một dấu hiệu để hành động và hành động ngay, cho bạn hiểu chính xác bạn muốn gì và cam kết rằng bạn sẽ đạt được nó."
    },
    {
        id: 3,
        name: "The High Priestess",
        image: "./Img/3.png",
        description: "Trong một trải bài, The High Priestess thách thức bạn phải biết tìm hiểu sâu hơn, tìm kiếm những thứ khác hơn và xa hơn những bằng chứng hiện tại mang đến, phải biết phân tách những thứ chỉ là bề nổi để tìm đến những thứ bị che lấp hoặc còn bị phủ  trong màn sương. Người cũng đòi hỏi bạn phải nhìn nhận lại những tiềm năng vô tận của bản thân và nhớ đến những khả năng vô hạn bên trong bạn. The High Priestess có thể tượng trưng cho một khoảng lặng đòi hỏi sự chờ đợi và chấp nhận mọi sự. Để đạt được mục đích không nhất định cứ phải hành động. Đôi khi sự tĩnh lặng chính là nhân tố cần có để mọi thứ có thể nảy nở khi thời điểm đến"
    },
    // {
    //     id: 4,
    //     name: "The Fool",
    //     image: "./Img/1.jpg",
    //     description: "The Fool cũng thể hiện niềm tin tuyệt đối rằng cuộc sống là tốt đẹp và đầy những thứ đáng tin cậy. Một số ý kiến có thể cho rằng The Fool quá ngây thơ, nhưng chính sự hồn nhiên đó là thứ giúp anh tồn tại và mang đến cho anh niềm vui thú. Trong một trải bài, The Fool có thể là tín hiệu cho một khởi đầu mới hay một sự đổi hướng – thứ sẽ dẫn lối bạn đến với cuộc phiêu lưu, tìm hiểu và từ đó phát triển bản thân. Anh ấy cũng nhắc chúng ta hãy giữ vững niềm tin và tin vào những phản hồi của tự nhiên. Nếu bạn đang phải đối mặt với một quyết định hay một khoảnh khắc nhiều nghi ngờ, thì The Fool hàm ý bảo bạn hãy tin vào bản thân và để trái tim dẫn lối dù điều đó có thể điên rồ đến mức nào đi nữa."
    // },
    // {
    //     id: 5,
    //     name: "The Magician",
    //     image: "./Img/2.jpg",
    //     description: "The Magician represents manifestation, power, and creativity."
    // },
    // {
    //     id: 6,
    //     name: "The High Priestess",
    //     image: "./Img/1.jpg",
    //     description: "The High Priestess represents intuition, mystery, and spirituality."
    // },
    // {
    //     id: 7,
    //     name: "The Fool",
    //     image: "./Img/1.jpg",
    //     description: "The Fool cũng thể hiện niềm tin tuyệt đối rằng cuộc sống là tốt đẹp và đầy những thứ đáng tin cậy. Một số ý kiến có thể cho rằng The Fool quá ngây thơ, nhưng chính sự hồn nhiên đó là thứ giúp anh tồn tại và mang đến cho anh niềm vui thú. Trong một trải bài, The Fool có thể là tín hiệu cho một khởi đầu mới hay một sự đổi hướng – thứ sẽ dẫn lối bạn đến với cuộc phiêu lưu, tìm hiểu và từ đó phát triển bản thân. Anh ấy cũng nhắc chúng ta hãy giữ vững niềm tin và tin vào những phản hồi của tự nhiên. Nếu bạn đang phải đối mặt với một quyết định hay một khoảnh khắc nhiều nghi ngờ, thì The Fool hàm ý bảo bạn hãy tin vào bản thân và để trái tim dẫn lối dù điều đó có thể điên rồ đến mức nào đi nữa."
    // },
    // {
    //     id: 8,
    //     name: "The Magician",
    //     image: "./Img/2.jpg",
    //     description: "The Magician represents manifestation, power, and creativity."
    // },
    // {
    //     id: 9,
    //     name: "The High Priestess",
    //     image: "./Img/1.jpg",
    //     description: "The High Priestess represents intuition, mystery, and spirituality."
    // },
    // {
    //     id: 10,
    //     name: "The Fool",
    //     image: "./Img/1.jpg",
    //     description: "The Fool cũng thể hiện niềm tin tuyệt đối rằng cuộc sống là tốt đẹp và đầy những thứ đáng tin cậy. Một số ý kiến có thể cho rằng The Fool quá ngây thơ, nhưng chính sự hồn nhiên đó là thứ giúp anh tồn tại và mang đến cho anh niềm vui thú. Trong một trải bài, The Fool có thể là tín hiệu cho một khởi đầu mới hay một sự đổi hướng – thứ sẽ dẫn lối bạn đến với cuộc phiêu lưu, tìm hiểu và từ đó phát triển bản thân. Anh ấy cũng nhắc chúng ta hãy giữ vững niềm tin và tin vào những phản hồi của tự nhiên. Nếu bạn đang phải đối mặt với một quyết định hay một khoảnh khắc nhiều nghi ngờ, thì The Fool hàm ý bảo bạn hãy tin vào bản thân và để trái tim dẫn lối dù điều đó có thể điên rồ đến mức nào đi nữa."
    // },
    // {
    //     id: 11,
    //     name: "The Magician",
    //     image: "./Img/2.jpg",
    //     description: "The Magician represents manifestation, power, and creativity."
    // },
    // {
    //     id: 12,
    //     name: "The High Priestess",
    //     image: "./Img/1.jpg",
    //     description: "The High Priestess represents intuition, mystery, and spirituality."
    // },
    // {
    //     id: 13,
    //     name: "The Fool",
    //     image: "./Img/1.jpg",
    //     description: "The Fool cũng thể hiện niềm tin tuyệt đối rằng cuộc sống là tốt đẹp và đầy những thứ đáng tin cậy. Một số ý kiến có thể cho rằng The Fool quá ngây thơ, nhưng chính sự hồn nhiên đó là thứ giúp anh tồn tại và mang đến cho anh niềm vui thú. Trong một trải bài, The Fool có thể là tín hiệu cho một khởi đầu mới hay một sự đổi hướng – thứ sẽ dẫn lối bạn đến với cuộc phiêu lưu, tìm hiểu và từ đó phát triển bản thân. Anh ấy cũng nhắc chúng ta hãy giữ vững niềm tin và tin vào những phản hồi của tự nhiên. Nếu bạn đang phải đối mặt với một quyết định hay một khoảnh khắc nhiều nghi ngờ, thì The Fool hàm ý bảo bạn hãy tin vào bản thân và để trái tim dẫn lối dù điều đó có thể điên rồ đến mức nào đi nữa."
    // },
    // {
    //     id: 14,
    //     name: "The Magician",
    //     image: "./Img/2.jpg",
    //     description: "The Magician represents manifestation, power, and creativity."
    // },
    // {
    //     id: 15,
    //     name: "The High Priestess",
    //     image: "./Img/1.jpg",
    //     description: "The High Priestess represents intuition, mystery, and spirituality."
    // },
    // {
    //     id: 16,
    //     name: "The Fool",
    //     image: "./Img/1.jpg",
    //     description: "The Fool cũng thể hiện niềm tin tuyệt đối rằng cuộc sống là tốt đẹp và đầy những thứ đáng tin cậy. Một số ý kiến có thể cho rằng The Fool quá ngây thơ, nhưng chính sự hồn nhiên đó là thứ giúp anh tồn tại và mang đến cho anh niềm vui thú. Trong một trải bài, The Fool có thể là tín hiệu cho một khởi đầu mới hay một sự đổi hướng – thứ sẽ dẫn lối bạn đến với cuộc phiêu lưu, tìm hiểu và từ đó phát triển bản thân. Anh ấy cũng nhắc chúng ta hãy giữ vững niềm tin và tin vào những phản hồi của tự nhiên. Nếu bạn đang phải đối mặt với một quyết định hay một khoảnh khắc nhiều nghi ngờ, thì The Fool hàm ý bảo bạn hãy tin vào bản thân và để trái tim dẫn lối dù điều đó có thể điên rồ đến mức nào đi nữa."
    // },
    // {
    //     id: 17,
    //     name: "The Magician",
    //     image: "./Img/2.jpg",
    //     description: "The Magician represents manifestation, power, and creativity."
    // },
    // {
    //     id: 18,
    //     name: "The High Priestess",
    //     image: "./Img/1.jpg",
    //     description: "The High Priestess represents intuition, mystery, and spirituality."
    // },
    // {
    //     id: 19,
    //     name: "The Fool",
    //     image: "./Img/1.jpg",
    //     description: "The Fool cũng thể hiện niềm tin tuyệt đối rằng cuộc sống là tốt đẹp và đầy những thứ đáng tin cậy. Một số ý kiến có thể cho rằng The Fool quá ngây thơ, nhưng chính sự hồn nhiên đó là thứ giúp anh tồn tại và mang đến cho anh niềm vui thú. Trong một trải bài, The Fool có thể là tín hiệu cho một khởi đầu mới hay một sự đổi hướng – thứ sẽ dẫn lối bạn đến với cuộc phiêu lưu, tìm hiểu và từ đó phát triển bản thân. Anh ấy cũng nhắc chúng ta hãy giữ vững niềm tin và tin vào những phản hồi của tự nhiên. Nếu bạn đang phải đối mặt với một quyết định hay một khoảnh khắc nhiều nghi ngờ, thì The Fool hàm ý bảo bạn hãy tin vào bản thân và để trái tim dẫn lối dù điều đó có thể điên rồ đến mức nào đi nữa."
    // },
    // {
    //     id: 20,
    //     name: "The Magician",
    //     image: "./Img/2.jpg",
    //     description: "The Magician represents manifestation, power, and creativity."
    // },
    // {
    //     id : 4,
    //     name: "The High Priestess",
    //     image: "./Img/1.jpg",
    //     description: "The High Priestess represents intuition, mystery, and spirituality."
    // },
    // {
    //     id : 4,
    //     name: "The Fool",
    //     image: "./Img/1.jpg",
    //     description: "The Fool cũng thể hiện niềm tin tuyệt đối rằng cuộc sống là tốt đẹp và đầy những thứ đáng tin cậy. Một số ý kiến có thể cho rằng The Fool quá ngây thơ, nhưng chính sự hồn nhiên đó là thứ giúp anh tồn tại và mang đến cho anh niềm vui thú. Trong một trải bài, The Fool có thể là tín hiệu cho một khởi đầu mới hay một sự đổi hướng – thứ sẽ dẫn lối bạn đến với cuộc phiêu lưu, tìm hiểu và từ đó phát triển bản thân. Anh ấy cũng nhắc chúng ta hãy giữ vững niềm tin và tin vào những phản hồi của tự nhiên. Nếu bạn đang phải đối mặt với một quyết định hay một khoảnh khắc nhiều nghi ngờ, thì The Fool hàm ý bảo bạn hãy tin vào bản thân và để trái tim dẫn lối dù điều đó có thể điên rồ đến mức nào đi nữa."
    // },
    // {
    //     id : 4,
    //     name: "The Magician",
    //     image: "./Img/2.jpg",
    //     description: "The Magician represents manifestation, power, and creativity."
    // },
    // {
    //     id : 4,
    //     name: "The High Priestess",
    //     image: "./Img/1.jpg",
    //     description: "The High Priestess represents intuition, mystery, and spirituality."
    // },
    // {
    //     id : 4,
    //     name: "The Fool",
    //     image: "./Img/1.jpg",
    //     description: "The Fool cũng thể hiện niềm tin tuyệt đối rằng cuộc sống là tốt đẹp và đầy những thứ đáng tin cậy. Một số ý kiến có thể cho rằng The Fool quá ngây thơ, nhưng chính sự hồn nhiên đó là thứ giúp anh tồn tại và mang đến cho anh niềm vui thú. Trong một trải bài, The Fool có thể là tín hiệu cho một khởi đầu mới hay một sự đổi hướng – thứ sẽ dẫn lối bạn đến với cuộc phiêu lưu, tìm hiểu và từ đó phát triển bản thân. Anh ấy cũng nhắc chúng ta hãy giữ vững niềm tin và tin vào những phản hồi của tự nhiên. Nếu bạn đang phải đối mặt với một quyết định hay một khoảnh khắc nhiều nghi ngờ, thì The Fool hàm ý bảo bạn hãy tin vào bản thân và để trái tim dẫn lối dù điều đó có thể điên rồ đến mức nào đi nữa."
    // },
    // {
    //     id : 4,
    //     name: "The Magician",
    //     image: "./Img/2.jpg",
    //     description: "The Magician represents manifestation, power, and creativity."
    // },
    // {
    //     id : 4,
    //     name: "The High Priestess",
    //     image: "./Img/1.jpg",
    //     description: "The High Priestess represents intuition, mystery, and spirituality."
    // },
    // {
    //     id : 4,
    //     name: "The Fool",
    //     image: "./Img/1.jpg",
    //     description: "The Fool cũng thể hiện niềm tin tuyệt đối rằng cuộc sống là tốt đẹp và đầy những thứ đáng tin cậy. Một số ý kiến có thể cho rằng The Fool quá ngây thơ, nhưng chính sự hồn nhiên đó là thứ giúp anh tồn tại và mang đến cho anh niềm vui thú. Trong một trải bài, The Fool có thể là tín hiệu cho một khởi đầu mới hay một sự đổi hướng – thứ sẽ dẫn lối bạn đến với cuộc phiêu lưu, tìm hiểu và từ đó phát triển bản thân. Anh ấy cũng nhắc chúng ta hãy giữ vững niềm tin và tin vào những phản hồi của tự nhiên. Nếu bạn đang phải đối mặt với một quyết định hay một khoảnh khắc nhiều nghi ngờ, thì The Fool hàm ý bảo bạn hãy tin vào bản thân và để trái tim dẫn lối dù điều đó có thể điên rồ đến mức nào đi nữa."
    // },
    // {
    //     id : 4,
    //     name: "The Magician",
    //     image: "./Img/2.jpg",
    //     description: "The Magician represents manifestation, power, and creativity."
    // },
    // {
    //     id : 4,
    //     name: "The High Priestess",
    //     image: "./Img/1.jpg",
    //     description: "The High Priestess represents intuition, mystery, and spirituality."
    // },
    // {
    //     id : 4,
    //     name: "The Fool",
    //     image: "./Img/1.jpg",
    //     description: "The Fool cũng thể hiện niềm tin tuyệt đối rằng cuộc sống là tốt đẹp và đầy những thứ đáng tin cậy. Một số ý kiến có thể cho rằng The Fool quá ngây thơ, nhưng chính sự hồn nhiên đó là thứ giúp anh tồn tại và mang đến cho anh niềm vui thú. Trong một trải bài, The Fool có thể là tín hiệu cho một khởi đầu mới hay một sự đổi hướng – thứ sẽ dẫn lối bạn đến với cuộc phiêu lưu, tìm hiểu và từ đó phát triển bản thân. Anh ấy cũng nhắc chúng ta hãy giữ vững niềm tin và tin vào những phản hồi của tự nhiên. Nếu bạn đang phải đối mặt với một quyết định hay một khoảnh khắc nhiều nghi ngờ, thì The Fool hàm ý bảo bạn hãy tin vào bản thân và để trái tim dẫn lối dù điều đó có thể điên rồ đến mức nào đi nữa."
    // },
    // {
    //     id : 4,
    //     name: "The Magician",
    //     image: "./Img/2.jpg",
    //     description: "The Magician represents manifestation, power, and creativity."
    // },
    // {
    //     id : 4,
    //     name: "The High Priestess",
    //     image: "./Img/1.jpg",
    //     description: "The High Priestess represents intuition, mystery, and spirituality."
    // },
    // {
    //     id : 4,
    //     name: "The Fool",
    //     image: "./Img/1.jpg",
    //     description: "The Fool cũng thể hiện niềm tin tuyệt đối rằng cuộc sống là tốt đẹp và đầy những thứ đáng tin cậy. Một số ý kiến có thể cho rằng The Fool quá ngây thơ, nhưng chính sự hồn nhiên đó là thứ giúp anh tồn tại và mang đến cho anh niềm vui thú. Trong một trải bài, The Fool có thể là tín hiệu cho một khởi đầu mới hay một sự đổi hướng – thứ sẽ dẫn lối bạn đến với cuộc phiêu lưu, tìm hiểu và từ đó phát triển bản thân. Anh ấy cũng nhắc chúng ta hãy giữ vững niềm tin và tin vào những phản hồi của tự nhiên. Nếu bạn đang phải đối mặt với một quyết định hay một khoảnh khắc nhiều nghi ngờ, thì The Fool hàm ý bảo bạn hãy tin vào bản thân và để trái tim dẫn lối dù điều đó có thể điên rồ đến mức nào đi nữa."
    // },
    // {
    //     id : 4,
    //     name: "The Magician",
    //     image: "./Img/2.jpg",
    //     description: "The Magician represents manifestation, power, and creativity."
    // },
    // {
    //     id : 4,
    //     name: "The High Priestess",
    //     image: "./Img/1.jpg",
    //     description: "The High Priestess represents intuition, mystery, and spirituality."
    // },
    // {
    //     id : 4,
    //     name: "The Fool",
    //     image: "./Img/1.jpg",
    //     description: "The Fool cũng thể hiện niềm tin tuyệt đối rằng cuộc sống là tốt đẹp và đầy những thứ đáng tin cậy. Một số ý kiến có thể cho rằng The Fool quá ngây thơ, nhưng chính sự hồn nhiên đó là thứ giúp anh tồn tại và mang đến cho anh niềm vui thú. Trong một trải bài, The Fool có thể là tín hiệu cho một khởi đầu mới hay một sự đổi hướng – thứ sẽ dẫn lối bạn đến với cuộc phiêu lưu, tìm hiểu và từ đó phát triển bản thân. Anh ấy cũng nhắc chúng ta hãy giữ vững niềm tin và tin vào những phản hồi của tự nhiên. Nếu bạn đang phải đối mặt với một quyết định hay một khoảnh khắc nhiều nghi ngờ, thì The Fool hàm ý bảo bạn hãy tin vào bản thân và để trái tim dẫn lối dù điều đó có thể điên rồ đến mức nào đi nữa."
    // },
    // {
    //     id : 4,
    //     name: "The Magician",
    //     image: "./Img/2.jpg",
    //     description: "The Magician represents manifestation, power, and creativity."
    // },
    // {
    //     id : 4,
    //     name: "The High Priestess",
    //     image: "./Img/1.jpg",
    //     description: "The High Priestess represents intuition, mystery, and spirituality."
    // },
    // {
    //     id : 4,
    //     name: "The Fool",
    //     image: "./Img/1.jpg",
    //     description: "The Fool cũng thể hiện niềm tin tuyệt đối rằng cuộc sống là tốt đẹp và đầy những thứ đáng tin cậy. Một số ý kiến có thể cho rằng The Fool quá ngây thơ, nhưng chính sự hồn nhiên đó là thứ giúp anh tồn tại và mang đến cho anh niềm vui thú. Trong một trải bài, The Fool có thể là tín hiệu cho một khởi đầu mới hay một sự đổi hướng – thứ sẽ dẫn lối bạn đến với cuộc phiêu lưu, tìm hiểu và từ đó phát triển bản thân. Anh ấy cũng nhắc chúng ta hãy giữ vững niềm tin và tin vào những phản hồi của tự nhiên. Nếu bạn đang phải đối mặt với một quyết định hay một khoảnh khắc nhiều nghi ngờ, thì The Fool hàm ý bảo bạn hãy tin vào bản thân và để trái tim dẫn lối dù điều đó có thể điên rồ đến mức nào đi nữa."
    // },
    // {
    //     id : 4,
    //     name: "The Magician",
    //     image: "./Img/2.jpg",
    //     description: "The Magician represents manifestation, power, and creativity."
    // },
    // {
    //     id : 4,
    //     name: "The High Priestess",
    //     image: "./Img/1.jpg",
    //     description: "The High Priestess represents intuition, mystery, and spirituality."
    // },
    // {
    //     id : 4,
    //     name: "The Fool",
    //     image: "./Img/1.jpg",
    //     description: "The Fool cũng thể hiện niềm tin tuyệt đối rằng cuộc sống là tốt đẹp và đầy những thứ đáng tin cậy. Một số ý kiến có thể cho rằng The Fool quá ngây thơ, nhưng chính sự hồn nhiên đó là thứ giúp anh tồn tại và mang đến cho anh niềm vui thú. Trong một trải bài, The Fool có thể là tín hiệu cho một khởi đầu mới hay một sự đổi hướng – thứ sẽ dẫn lối bạn đến với cuộc phiêu lưu, tìm hiểu và từ đó phát triển bản thân. Anh ấy cũng nhắc chúng ta hãy giữ vững niềm tin và tin vào những phản hồi của tự nhiên. Nếu bạn đang phải đối mặt với một quyết định hay một khoảnh khắc nhiều nghi ngờ, thì The Fool hàm ý bảo bạn hãy tin vào bản thân và để trái tim dẫn lối dù điều đó có thể điên rồ đến mức nào đi nữa."
    // },
    // {
    //     id : 4,
    //     name: "The Magician",
    //     image: "./Img/2.jpg",
    //     description: "The Magician represents manifestation, power, and creativity."
    // },
    // {
    //     id : 4,
    //     name: "The High Priestess",
    //     image: "./Img/1.jpg",
    //     description: "The High Priestess represents intuition, mystery, and spirituality."
    // },
    // {
    //     id : 4,
    //     name: "The Fool",
    //     image: "./Img/1.jpg",
    //     description: "The Fool cũng thể hiện niềm tin tuyệt đối rằng cuộc sống là tốt đẹp và đầy những thứ đáng tin cậy. Một số ý kiến có thể cho rằng The Fool quá ngây thơ, nhưng chính sự hồn nhiên đó là thứ giúp anh tồn tại và mang đến cho anh niềm vui thú. Trong một trải bài, The Fool có thể là tín hiệu cho một khởi đầu mới hay một sự đổi hướng – thứ sẽ dẫn lối bạn đến với cuộc phiêu lưu, tìm hiểu và từ đó phát triển bản thân. Anh ấy cũng nhắc chúng ta hãy giữ vững niềm tin và tin vào những phản hồi của tự nhiên. Nếu bạn đang phải đối mặt với một quyết định hay một khoảnh khắc nhiều nghi ngờ, thì The Fool hàm ý bảo bạn hãy tin vào bản thân và để trái tim dẫn lối dù điều đó có thể điên rồ đến mức nào đi nữa."
    // },
    // {
    //     id : 4,
    //     name: "The Magician",
    //     image: "./Img/2.jpg",
    //     description: "The Magician represents manifestation, power, and creativity."
    // },
    // {
    //     id : 4,
    //     name: "The High Priestess",
    //     image: "./Img/1.jpg",
    //     description: "The High Priestess represents intuition, mystery, and spirituality."
    // },
    // {
    //     id : 4,
    //     name: "The Fool",
    //     image: "./Img/1.jpg",
    //     description: "The Fool cũng thể hiện niềm tin tuyệt đối rằng cuộc sống là tốt đẹp và đầy những thứ đáng tin cậy. Một số ý kiến có thể cho rằng The Fool quá ngây thơ, nhưng chính sự hồn nhiên đó là thứ giúp anh tồn tại và mang đến cho anh niềm vui thú. Trong một trải bài, The Fool có thể là tín hiệu cho một khởi đầu mới hay một sự đổi hướng – thứ sẽ dẫn lối bạn đến với cuộc phiêu lưu, tìm hiểu và từ đó phát triển bản thân. Anh ấy cũng nhắc chúng ta hãy giữ vững niềm tin và tin vào những phản hồi của tự nhiên. Nếu bạn đang phải đối mặt với một quyết định hay một khoảnh khắc nhiều nghi ngờ, thì The Fool hàm ý bảo bạn hãy tin vào bản thân và để trái tim dẫn lối dù điều đó có thể điên rồ đến mức nào đi nữa."
    // },
    // {
    //     id : 4,
    //     name: "The Magician",
    //     image: "./Img/2.jpg",
    //     description: "The Magician represents manifestation, power, and creativity."
    // },
    // {
    //     id : 4,
    //     name: "The High Priestess",
    //     image: "./Img/1.jpg",
    //     description: "The High Priestess represents intuition, mystery, and spirituality."
    // },
    // {
    //     id : 4,
    //     name: "The Fool",
    //     image: "./Img/1.jpg",
    //     description: "The Fool cũng thể hiện niềm tin tuyệt đối rằng cuộc sống là tốt đẹp và đầy những thứ đáng tin cậy. Một số ý kiến có thể cho rằng The Fool quá ngây thơ, nhưng chính sự hồn nhiên đó là thứ giúp anh tồn tại và mang đến cho anh niềm vui thú. Trong một trải bài, The Fool có thể là tín hiệu cho một khởi đầu mới hay một sự đổi hướng – thứ sẽ dẫn lối bạn đến với cuộc phiêu lưu, tìm hiểu và từ đó phát triển bản thân. Anh ấy cũng nhắc chúng ta hãy giữ vững niềm tin và tin vào những phản hồi của tự nhiên. Nếu bạn đang phải đối mặt với một quyết định hay một khoảnh khắc nhiều nghi ngờ, thì The Fool hàm ý bảo bạn hãy tin vào bản thân và để trái tim dẫn lối dù điều đó có thể điên rồ đến mức nào đi nữa."
    // },
    // {
    //     id : 4,
    //     name: "The Magician",
    //     image: "./Img/2.jpg",
    //     description: "The Magician represents manifestation, power, and creativity."
    // },
    // {
    //     id : 4,
    //     name: "The High Priestess",
    //     image: "./Img/1.jpg",
    //     description: "The High Priestess represents intuition, mystery, and spirituality."
    // },
    // {
    //     id : 4,
    //     name: "The Fool",
    //     image: "./Img/1.jpg",
    //     description: "The Fool cũng thể hiện niềm tin tuyệt đối rằng cuộc sống là tốt đẹp và đầy những thứ đáng tin cậy. Một số ý kiến có thể cho rằng The Fool quá ngây thơ, nhưng chính sự hồn nhiên đó là thứ giúp anh tồn tại và mang đến cho anh niềm vui thú. Trong một trải bài, The Fool có thể là tín hiệu cho một khởi đầu mới hay một sự đổi hướng – thứ sẽ dẫn lối bạn đến với cuộc phiêu lưu, tìm hiểu và từ đó phát triển bản thân. Anh ấy cũng nhắc chúng ta hãy giữ vững niềm tin và tin vào những phản hồi của tự nhiên. Nếu bạn đang phải đối mặt với một quyết định hay một khoảnh khắc nhiều nghi ngờ, thì The Fool hàm ý bảo bạn hãy tin vào bản thân và để trái tim dẫn lối dù điều đó có thể điên rồ đến mức nào đi nữa."
    // },
    // {
    //     id : 4,
    //     name: "The Magician",
    //     image: "./Img/2.jpg",
    //     description: "The Magician represents manifestation, power, and creativity."
    // },
    // {
    //     id : 4,
    //     name: "The High Priestess",
    //     image: "./Img/1.jpg",
    //     description: "The High Priestess represents intuition, mystery, and spirituality."
    // },
    // {
    //     id : 4,
    //     name: "The Fool",
    //     image: "./Img/1.jpg",
    //     description: "The Fool cũng thể hiện niềm tin tuyệt đối rằng cuộc sống là tốt đẹp và đầy những thứ đáng tin cậy. Một số ý kiến có thể cho rằng The Fool quá ngây thơ, nhưng chính sự hồn nhiên đó là thứ giúp anh tồn tại và mang đến cho anh niềm vui thú. Trong một trải bài, The Fool có thể là tín hiệu cho một khởi đầu mới hay một sự đổi hướng – thứ sẽ dẫn lối bạn đến với cuộc phiêu lưu, tìm hiểu và từ đó phát triển bản thân. Anh ấy cũng nhắc chúng ta hãy giữ vững niềm tin và tin vào những phản hồi của tự nhiên. Nếu bạn đang phải đối mặt với một quyết định hay một khoảnh khắc nhiều nghi ngờ, thì The Fool hàm ý bảo bạn hãy tin vào bản thân và để trái tim dẫn lối dù điều đó có thể điên rồ đến mức nào đi nữa."
    // },
    // {
    //     id : 4,
    //     name: "The Magician",
    //     image: "./Img/2.jpg",
    //     description: "The Magician represents manifestation, power, and creativity."
    // },
    // {
    //     id : 4,
    //     name: "The High Priestess",
    //     image: "./Img/1.jpg",
    //     description: "The High Priestess represents intuition, mystery, and spirituality."
    // },
    // {
    //     id : 4,
    //     name: "The Fool",
    //     image: "./Img/1.jpg",
    //     description: "The Fool cũng thể hiện niềm tin tuyệt đối rằng cuộc sống là tốt đẹp và đầy những thứ đáng tin cậy. Một số ý kiến có thể cho rằng The Fool quá ngây thơ, nhưng chính sự hồn nhiên đó là thứ giúp anh tồn tại và mang đến cho anh niềm vui thú. Trong một trải bài, The Fool có thể là tín hiệu cho một khởi đầu mới hay một sự đổi hướng – thứ sẽ dẫn lối bạn đến với cuộc phiêu lưu, tìm hiểu và từ đó phát triển bản thân. Anh ấy cũng nhắc chúng ta hãy giữ vững niềm tin và tin vào những phản hồi của tự nhiên. Nếu bạn đang phải đối mặt với một quyết định hay một khoảnh khắc nhiều nghi ngờ, thì The Fool hàm ý bảo bạn hãy tin vào bản thân và để trái tim dẫn lối dù điều đó có thể điên rồ đến mức nào đi nữa."
    // },
    // {
    //     id : 4,
    //     name: "The Magician",
    //     image: "./Img/2.jpg",
    //     description: "The Magician represents manifestation, power, and creativity."
    // },
    // {
    //     id : 4,
    //     name: "The High Priestess",
    //     image: "./Img/1.jpg",
    //     description: "The High Priestess represents intuition, mystery, and spirituality."
    // },
    // {
    //     id : 4,
    //     name: "The Fool",
    //     image: "./Img/1.jpg",
    //     description: "The Fool cũng thể hiện niềm tin tuyệt đối rằng cuộc sống là tốt đẹp và đầy những thứ đáng tin cậy. Một số ý kiến có thể cho rằng The Fool quá ngây thơ, nhưng chính sự hồn nhiên đó là thứ giúp anh tồn tại và mang đến cho anh niềm vui thú. Trong một trải bài, The Fool có thể là tín hiệu cho một khởi đầu mới hay một sự đổi hướng – thứ sẽ dẫn lối bạn đến với cuộc phiêu lưu, tìm hiểu và từ đó phát triển bản thân. Anh ấy cũng nhắc chúng ta hãy giữ vững niềm tin và tin vào những phản hồi của tự nhiên. Nếu bạn đang phải đối mặt với một quyết định hay một khoảnh khắc nhiều nghi ngờ, thì The Fool hàm ý bảo bạn hãy tin vào bản thân và để trái tim dẫn lối dù điều đó có thể điên rồ đến mức nào đi nữa."
    // },
    // {
    //     id : 4,
    //     name: "The Magician",
    //     image: "./Img/2.jpg",
    //     description: "The Magician represents manifestation, power, and creativity."
    // },
    // {
    //     id : 4,
    //     name: "The High Priestess",
    //     image: "./Img/1.jpg",
    //     description: "The High Priestess represents intuition, mystery, and spirituality."
    // },
    // {
    //     id : 4,
    //     name: "The Fool",
    //     image: "./Img/1.jpg",
    //     description: "The Fool cũng thể hiện niềm tin tuyệt đối rằng cuộc sống là tốt đẹp và đầy những thứ đáng tin cậy. Một số ý kiến có thể cho rằng The Fool quá ngây thơ, nhưng chính sự hồn nhiên đó là thứ giúp anh tồn tại và mang đến cho anh niềm vui thú. Trong một trải bài, The Fool có thể là tín hiệu cho một khởi đầu mới hay một sự đổi hướng – thứ sẽ dẫn lối bạn đến với cuộc phiêu lưu, tìm hiểu và từ đó phát triển bản thân. Anh ấy cũng nhắc chúng ta hãy giữ vững niềm tin và tin vào những phản hồi của tự nhiên. Nếu bạn đang phải đối mặt với một quyết định hay một khoảnh khắc nhiều nghi ngờ, thì The Fool hàm ý bảo bạn hãy tin vào bản thân và để trái tim dẫn lối dù điều đó có thể điên rồ đến mức nào đi nữa."
    // },
    // {
    //     id : 4,
    //     name: "The Magician",
    //     image: "./Img/2.jpg",
    //     description: "The Magician represents manifestation, power, and creativity."
    // },
    // {
    //     id : 4,
    //     name: "The High Priestess",
    //     image: "./Img/1.jpg",
    //     description: "The High Priestess represents intuition, mystery, and spirituality."
    // },
    // {
    //     id : 4,
    //     name: "The Fool",
    //     image: "./Img/1.jpg",
    //     description: "The Fool cũng thể hiện niềm tin tuyệt đối rằng cuộc sống là tốt đẹp và đầy những thứ đáng tin cậy. Một số ý kiến có thể cho rằng The Fool quá ngây thơ, nhưng chính sự hồn nhiên đó là thứ giúp anh tồn tại và mang đến cho anh niềm vui thú. Trong một trải bài, The Fool có thể là tín hiệu cho một khởi đầu mới hay một sự đổi hướng – thứ sẽ dẫn lối bạn đến với cuộc phiêu lưu, tìm hiểu và từ đó phát triển bản thân. Anh ấy cũng nhắc chúng ta hãy giữ vững niềm tin và tin vào những phản hồi của tự nhiên. Nếu bạn đang phải đối mặt với một quyết định hay một khoảnh khắc nhiều nghi ngờ, thì The Fool hàm ý bảo bạn hãy tin vào bản thân và để trái tim dẫn lối dù điều đó có thể điên rồ đến mức nào đi nữa."
    // },
    // {
    //     id : 4,
    //     name: "The Magician",
    //     image: "./Img/2.jpg",
    //     description: "The Magician represents manifestation, power, and creativity."
    // },
    // {
    //     id : 4,
    //     name: "The High Priestess",
    //     image: "./Img/1.jpg",
    //     description: "The High Priestess represents intuition, mystery, and spirituality."
    // },
    // {
    //     id : 4,
    //     name: "The Fool",
    //     image: "./Img/1.jpg",
    //     description: "The Fool cũng thể hiện niềm tin tuyệt đối rằng cuộc sống là tốt đẹp và đầy những thứ đáng tin cậy. Một số ý kiến có thể cho rằng The Fool quá ngây thơ, nhưng chính sự hồn nhiên đó là thứ giúp anh tồn tại và mang đến cho anh niềm vui thú. Trong một trải bài, The Fool có thể là tín hiệu cho một khởi đầu mới hay một sự đổi hướng – thứ sẽ dẫn lối bạn đến với cuộc phiêu lưu, tìm hiểu và từ đó phát triển bản thân. Anh ấy cũng nhắc chúng ta hãy giữ vững niềm tin và tin vào những phản hồi của tự nhiên. Nếu bạn đang phải đối mặt với một quyết định hay một khoảnh khắc nhiều nghi ngờ, thì The Fool hàm ý bảo bạn hãy tin vào bản thân và để trái tim dẫn lối dù điều đó có thể điên rồ đến mức nào đi nữa."
    // },
    // {
    //     id : 4,
    //     name: "The Magician",
    //     image: "./Img/2.jpg",
    //     description: "The Magician represents manifestation, power, and creativity."
    // },
    // {
    //     id : 4,
    //     name: "The High Priestess",
    //     image: "./Img/1.jpg",
    //     description: "The High Priestess represents intuition, mystery, and spirituality."
    // },
    // {
    //     id : 4,
    //     name: "The Fool",
    //     image: "./Img/1.jpg",
    //     description: "The Fool cũng thể hiện niềm tin tuyệt đối rằng cuộc sống là tốt đẹp và đầy những thứ đáng tin cậy. Một số ý kiến có thể cho rằng The Fool quá ngây thơ, nhưng chính sự hồn nhiên đó là thứ giúp anh tồn tại và mang đến cho anh niềm vui thú. Trong một trải bài, The Fool có thể là tín hiệu cho một khởi đầu mới hay một sự đổi hướng – thứ sẽ dẫn lối bạn đến với cuộc phiêu lưu, tìm hiểu và từ đó phát triển bản thân. Anh ấy cũng nhắc chúng ta hãy giữ vững niềm tin và tin vào những phản hồi của tự nhiên. Nếu bạn đang phải đối mặt với một quyết định hay một khoảnh khắc nhiều nghi ngờ, thì The Fool hàm ý bảo bạn hãy tin vào bản thân và để trái tim dẫn lối dù điều đó có thể điên rồ đến mức nào đi nữa."
    // },
    // {
    //     id : 4,
    //     name: "The Magician",
    //     image: "./Img/2.jpg",
    //     description: "The Magician represents manifestation, power, and creativity."
    // },
    // {
    //     id : 4,
    //     name: "The High Priestess",
    //     image: "./Img/1.jpg",
    //     description: "The High Priestess represents intuition, mystery, and spirituality."
    // },
];

const cardDisplay = document.getElementById("card-display");
const pickCardButton = document.getElementById("pick-card-button");

pickCardButton.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * tarotCards.length);
    const randomCard = tarotCards[randomIndex];

    const cardHTML = `
      <div>
        <h2>${randomCard.name}</h2>
        <img src="${randomCard.image}" alt="${randomCard.name}" style="width: 200px;">
        <p>${randomCard.description}</p>
      </div>
    `;

    cardDisplay.innerHTML = cardHTML;
});
