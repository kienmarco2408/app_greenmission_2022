import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const List_news_nav = () => {
  const navigation = useNavigation();
  const news = [
    {
      id: 1,
      title:
        "Học về mô hình 3Rs - Tái chế, Tái sử dụng, Giảm thiểu - và vì sao nó lại cần thiết?",
      img: require("../storage/imgs/list_news/img1.jpg"),
      view: "4k",
      imgPost1: require("../storage/imgs/list_news/img1_2.jpg"),
      content: [
        "Mô hình 3Rs của môi trường - Reduce (giảm thiểu), Reuse(tái sử dụng), Recycle(tái chế) - đã xuất hiện được một thời gian ở Việt Nam nhưng nhiều người đã tỏ ra không quan tâm và không tuân theo mô hình này. Chính phủ Việt Nam đã nói rằng đây là điều tốt nhất khi họ thúc đẩy việc bảo tồn khí đốt, cao su, tơ lụa và các nguồn tài nguyên khan hiếm khác. \n \n",
        "Hàng năm, chúng ta lãng phí khoảng ⅓ tỷ tấn thực phẩm, tương đương 1.2 nghìn tỷ đô la, thải ra khoảng 400 triệu tấn nhựa, và riêng Việt Nam chúng ta thải ra hơn 15 triệu tấn rác. Hơn 30% chất thải của chúng ta là chất liệu đóng gói. Tất cả những đống rác này được mang đến đâu để xử lý? Khoảng 85% rác của chúng ta được mang đến những bãi rác hoặc bãi chôn lấp, mặc dù chúng ta đang ngày càng thiếu chỗ và đất đai.",
      ],
      postTitle1: "Vì sao lại là mô hình 3Rs?",
      content1: [
        "Các công ty sản xuất hàng tiêu dùng luôn bán cho chúng ta một hóa đơn hàng mới. Một số người tin rằng chúng ta có thể mua sắm theo cách của bản thân để giúp cho một Trái Đất trong sạch và tươi đẹp hơn. Trong nhiều năm qua, các quảng cáo thì luôn nói với chúng ta rằng những chiếc xe tuyệt vời sẽ giúp chúng ta thoải mái hơn, những loại nước ngọt dành cho người ăn kiêng sẽ giúp chúng ta trở nên tốt đẹp hơn. Nhưng có một số thứ mà tiền, hay quảng cáo, cũng không thể mua được, và một môi trường trong sạch chính là một trong số đó. Thực tế khắc nghiệt đó là sự nóng lên toàn cầu, nạn phá rừng, và các vấn đề khác trên Trái Đất không thể được giải quyết bằng cách thay đổi giữa các nhãn hàng. \n \n",
        "Chúng ta cần có nguồn lực để sản xuất và vận chuyển tất cả các sản phẩm, ngay cả những sản phẩm được làm từ việc tái chế. Năng lượng cần phải được dùng một cách ít nhất. Ngoài ra, việc tiêu dùng tài nguyên khiến cho thế giới cạn kiệt hơn và không thể trở nên tốt đẹp hơn được. Vì vậy, chúng ta nên mua cái gì khi mà chúng ta đều đang mong muốn được mua những thứ mới? Không có gì tốt hơn cho Trái Đất là mua những vật liệu “xanh”.\n \n",
        "Và tất nhiên là sẽ có những trường hợp ngoại lệ. Nếu ô tô hoặc thiết bị hiện tại của bạn là một thiết bị tiêu hao năng lượng khủng khiếp, bạn có thể tiết kiệm tài nguyên về lâu dài bằng cách thay thế nó bằng một mẫu xe tiết kiệm năng lượng. Và nó sẽ giúp ích cho chính sức khỏe của bạn và gia đình bằng cách thay những sản phẩm có thể rò rỉ chất độc, chẳng hạn như đồ chơi trẻ em bằng nhựa PVC.\n \n",
        "Nhựa là một tác hại mà quá trình hiện đại hóa đã mang lại. Mặc dù chúng giúp cho cuộc sống hàng ngày của chúng ta dễ hàng hơn, chúng cũng gây ra các vấn đề. Một mối quan ngại ngày càng tăng đối với nhiều người là số lượng nhựa tìm thấy đường vào các đại dương và hồ của chúng ta. Cơ quan Khí quyển và Đại dương Quốc gia (NOAA) ước tính rằng 8 triệu tấn nhựa đi vào các đại dương mỗi năm. Các hạt vi phân nhựa - các hạt nhựa phân hủy nhỏ - đang được tìm thấy ở nhiều nơi, kể cả những vùng xa xôi như Dãy núi Pyrenees, Nam Cực, và Bắc Cực.",
        "Tuy nhiên, thường thì việc tuân theo quy cũ sẽ tốt cho môi trường hơn: giảm thiểu, tái sử dụng, tái chế. Tôi biết rằng bạn đã nghe nó hàng nghìn lần trước đây, nhưng với từ “xanh” bây giờ được dùng chung trong dịch vụ bán hàng, thì 3 Rs là một cụm từ - và là một nguyên tắc - đáng để được hồi sinh.\n \n",
      ],
      imgPost2: require("../storage/imgs/list_news/img1_1.jpg"),
      postTitle2: "Giảm thiểu",
      content2: [
        "Giảm thiểu có nghĩa là sử dụng ít tài nguyên hơn ngay từ đầu. Đây là cách hiệu quả nhất trong 3 R và cũng là cách đầu tiên. Nó cũng là cách khó nhất vì nó đòi hỏi phải bỏ đi một số những quan niệm của con người, bao gồm “càng lớn càng tốt”, “tiện lợi là ưu tiên hàng đầu”. Nhưng bạn không cần phải bỏ đi hoàn toàn những thói quen đó. Giảm thiểu là một từ so sánh, và nó nói: hãy quay trở lại vị trí hiện tại của bạn. \n \n",
        "Khi bạn đi mua sắm, hãy mua sắm theo cách khác. Hãy tìm những thứ sẽ tồn tại lâu dài, những thứ không chỉ bền và tốt mà còn phải hữu ích và đẹp để bạn hài lòng trong thời gian dài. Số tiền bạn chi thêm để mua lại những vật dụng đấy sẽ được bù đắp bằng số tiền bạn không chi để thay thế những vật dụng đó. Đừng đi theo những xu hướng hiện đại nhất. Bởi vì chúng sẽ hỏng nhanh nhất.\n \n",
        "Với đồ điện tử, sự đầu tư có thể sẽ có lợi ích lâu dài. Một máy tính tối tân vẫn sẽ chạy phần mềm ra mắt hai năm sau và một hệ thống quản lý lớn sẽ chứa đủ các trang web to lớn mà công ty sẽ xây dựng sau đó. Tương tự như vậy, một chiếc điện thoại di động có bàn phím chữ (hoặc Iphone) sẽ giúp bạn đi qua kỷ nguyên nhắn tin đang tồn tại. Khi bạn mua hàng, hãy tìm hiểu cách để duy trì tính tối ưu và lâu dài của mặt hàng. Sau đó, chỉ đi bảo trì và sửa chữa khi cần thiết.",
      ],
      imgPost3: require("../storage/imgs/list_news/img1_3.jpg"),
    },
    {
      id: 2,
      title: "Thông tin về các loại rác thải và cách xử lý",
      img: require("../storage/imgs/list_news/img2.jpg"),
      view: "4k",
      imgPost1: require("../storage/imgs/list_news/img1_1.jpg"),
      content: [
        "Có lẽ mọi người đều biết rằng ở nước ta tình trạng rác thải bừa bãi vẫn còn tồn tại, nhiều vùng bị ô nhiễm về nguồn nước, đất và không gian sống. Để giải quyết thực trạng này thì sớm nhất người dân cần được học cách thức phân loại, xử lý rác và tuyên truyền nâng cao ý thức thu dọn rác từ hoạt động hàng ngày nhỏ nhất.\n \n",
        "Rác thải từ nhiều nguồn đổ ra lúc nào cũng nhiều, việc phân loại đúng cách sẽ đỡ được công đoạn vất vả cho công nhân môi trường nhanh chóng xử lý rác trong ngày. Lượng rác ở các bãi tập kết bao giờ cũng chất đống cao vút, do vậy người dân thực hiện phân loại ngay từ đầu nguồn như ở nhà, cơ quan, đi ra ngoài để riêng ra thì sẽ góp sức vào việc làm sạch đẹp môi trường hơn.\n \n",
        "Thay vào đó thì cơ quan chức năng nên thiết lập các thiết bị chứa rác riêng biệt cho nhiều loại rác để người dân bỏ đúng từng nơi. Như vậy thì các túi rác sẽ được bỏ đúng nơi thay vì bỏ tất cả lẫn lộn vào nhau, sau đó tới nơi tập kết lại phải đổ ra rồi phân loại mới đem đi xử lý hết sức tốn công và mất thời gian.\n \n",
        "Ở các thành phố lớn, khu đô thị và các vùng miền đã được phổ cập chính sách thiết kế thùng rác nhiều ngăn hoặc đặt nhiều thùng rác được phân loại cạnh nhau. Ví dụ ở TPHCM, Hà Nội xuất hiện thùng rác nhiều ngăn ở khu vực công cộng như công viên, trường học, vườn hoa, bảo tàng,…Mọi người đọc thông tin phân loại rác hướng dẫn ở trên thùng để đổ đúng vị trí quy định sẽ chung tay cho môi trường trong lành hơn.",
      ],
      postTitle1: "Các cách nhận biết rác thải môi trường",
      content1: [
        "Rác thải ngày nay được phân thành 3 loại chính: Rác hữu cơ, Rác vô cơ, và Rác tái chế. \n \n",
        "Rác hữu cơ: \n \n   ",
        "- Loại rác này dễ phân hủy khi đi vào môi trường, tái sử dụng cho việc làm phân bón chăm sóc cây trồng, làm tăng độ màu mỡ cho đất và thức ăn cho động vật. Nguồn tạo ra rác hữu cơ từ thức ăn bỏ đi, vỏ rau củ quả, vỏ trứng, cây cỏ, hoa lá…Loại rác này không chứa chất độc hại nguy hiểm cho môi trường.\n \n",
        "Rác vô cơ: \n \n    ",
        "- Rác vô cơ hầu hết là rác không thể sử dụng được nữa khi người dân bỏ đi chủ yếu là cần được xử lý đúng cách làm sao để không làm ô nhiễm không khí, đất, nước và ảnh hưởng tới sức khỏe người dân xung quanh. Nguồn tạo ra rác thải vô cơ có nhiều như vật liệu xây dựng bỏ đi, đồ dùng sinh hoạt, vỏ bọc thực phẩm, túi nilon, thiết bị đời sống hàng ngày,… Rác vô cơ thường được lựa chọn đốt hoặc chôn lấp. Nhưng nhìn chung có chứa chất độc hại và khó phân hủy về lâu dài.\n \n",
        "Rác tái chế: \n \n   ",
        "- Rác tái chế nghĩa là rác thải ra môi trường đã qua sử dụng rồi nhưng vẫn có thể được tận dụng tạo ra các sản phẩm mới có ích. Ví dụ vỏ nhựa, lon bia, chai, hộp đựng thực phẩm,…Sản phẩm bỏ đi này có thể làm nguồn nguyên liệu tiếp tục tạo ra vật dụng cần thiết cho cuộc sống như hộp đựng bút thước, lọ hoa decor, vật liệu trang trí căn phòng phong cách mới,… Việc phân loại rác nêu trên dần đã được cơ quan chức năng phổ biến kiến thức cho người dân thực hiện. Nếu cách phân loại rác thải thủ công vất vả khi tới nơi tập kết thì gợi ý cho mọi người sử dụng máy tách rác cực kỳ hiệu quả trong việc phân loại rác nhanh chóng, đỡ tốn công sức của nhân công để tập trung xử lý khối lượng rác khổng lồ.",
      ],
      imgPost2: require("../storage/imgs/list_news/img2_1.jpg"),
      postTitle2: "Cách để tái chế rác thải như thế nào?",
      content2: [
        "Câu trả lời đơn giản nhất là: hãy làm những điều nhỏ, thường xuyên và nhất quán, bắt đầu từ những việc ở nhà. Cho dù đó là một căn hộ nhỏ ở trung tâm thành phố hay một ngôi nhà lớn ở nông thôn, nghĩa vụ tái chế là của tất cả mọi người. Một căn bếp nhỏ không phải là lý do biện hộ, vì có rất nhiều thùng rác tái chế với nhiều hình dạng và kích cỡ khác nhau được bày bán ở bất kỳ cửa hàng nào và trên mạng. Để tái chế, bạn cũng có thể sử dụng túi giấy và hộp các tông, hoặc đơn giản là đặt tất cả đồ tái chế vào một chỗ và phân loại trực tiếp vào các thùng thích hợp.",
      ],
      imgPost3: require("../storage/imgs/list_news/img1_3.jpg"),
    },
    {
      id: 3,
      title: "Cách để tái chế rác và vì sao chúng ta nên tái chế",
      img: require("../storage/imgs/list_news/img3.jpg"),
      view: "4k",
      imgPost1: require("../storage/imgs/list_news/img3_1.png"),
      content: [
        "Phân loại rác thải không chỉ là một hành động, mà đó còn là một nghĩa vụ. Tuy nhiên, mọi người thường không biết phân loại rác và nên vứt rác vào loại thùng nào. Làm thế nào để có thể tái chế rác theo các quy định và giúp ích cho hành tinh của chúng ta? Dưới đây là một số cách và mẹo để giúp ích cho bạn.\n \n",
        "Việc hạn chế rác thải hàng ngày là công việc luôn luôn được khuyến khích. Dù chúng ta gọi đây là xu hướng ít chất thải hơn, hay nhận thức môi trường, hay là nhu cầu cá nhân, mỗi chúng ta nên giảm thiểu chất thải đến mức thấp nhất. Hãy đối mặt với nó - ít hơn không có nghĩa là không có. Nó là bất khả thi để không tạo ra bất cứ một chút rác thải nào trong cuộc sống hàng ngày của chúng ta. Không sớm thì muộn, một số hoạt động mua sắm và các hoạt động thường ngày của chúng ta sẽ dẫn đến hậu quả của việc lại làm đầy thùng rác. Và nó là những việc không thể không xảy ra.",
      ],
      postTitle1: "Vì sao chúng ta nên tái chế?",
      content1: [
        "Lượng rác thải trung bình của người dân Việt Nam vào năm ngoái là 438 kg! Điều này có nghĩa là khoảng 1.2 kg rác thải mỗi ngày. Điều đáng lo ngại không kém là thực tế chỉ có 20-30% trong số đó được tái chế. \n \n",
        "Ngoài các vấn đề môi trường, từ khía cạnh kinh tế, tái chế có nghĩa là tiết kiệm đáng kể - không chỉ trên toàn cầu, mà còn cho từng cá nhân. Nói một cách đơn giản, một nửa số rác đổ vào thùng của chúng ta nên được tái chế. Ở một số thành phố lớn, chi phí cho những món đồ không tái chế được gần như là gấp đôi chi phi cho những đồ có thể tái chế. \n \n   ",
        "Ngoài ra, chi phí cho những đồ không tái chế được cũng do môi trường chúng ta sinh ra. Các bãi chôn lấp lan rộng, phát thải khí nhà kính, ô nhiễm đất và nước, nguy cơ hỏa hoạn - chỉ là một vài trong số những mối đe dọa lớn do chúng ta tạo nên.",
      ],
      imgPost2: require("../storage/imgs/list_news/img2_1.jpg"),
      postTitle2: "Cách để tái chế rác thải như thế nào?",
      content2: [
        "Câu trả lời đơn giản nhất là: hãy làm những điều nhỏ, thường xuyên và nhất quán, bắt đầu từ những việc ở nhà. Cho dù đó là một căn hộ nhỏ ở trung tâm thành phố hay một ngôi nhà lớn ở nông thôn, nghĩa vụ tái chế là của tất cả mọi người. Một căn bếp nhỏ không phải là lý do biện hộ, vì có rất nhiều thùng rác tái chế với nhiều hình dạng và kích cỡ khác nhau được bày bán ở bất kỳ cửa hàng nào và trên mạng. Để tái chế, bạn cũng có thể sử dụng túi giấy và hộp các tông, hoặc đơn giản là đặt tất cả đồ tái chế vào một chỗ và phân loại trực tiếp vào các thùng thích hợp.",
      ],
      imgPost3: require("../storage/imgs/list_news/img1_3.jpg"),
    },
    {
      id: 4,
      title: "Cách phân loại rác thải",
      img: require("../storage/imgs/list_news/img4.png"),
      view: "4k",
      imgPost1: require("../storage/imgs/list_news/img4_1.png"),
      content: [
        "Điều quan trọng là phân loại rác thành thủy tinh (thùng màu xanh lá cây), giấy (màu xanh lam), kim loại + nhựa (màu vàng), hỗn hợp (màu đen) và sinh học (màu nâu). Không phải lúc nào cũng rõ ràng nên chọn thùng nào. Đôi khi, màu sắc không phù hợp với nhu cầu sử dụng, nhưng thùng vẫn được đánh dấu theo cách khác.",
      ],
      postTitle1: "Không phải những mảnh vỡ đều là thủy tinh",
      content1: [
        "Tái chế thủy tinh là một trong những quy trình tái chế có lợi nhất về mặt kinh tế và sinh thái. Sản phẩm của nó duy trì tất cả các thuộc tính và chất lượng ban đầu. Ngoài ra, những mảnh vụn vỡ được sử dụng để sản xuất các mặt hàng mới nóng chảy ở nhiệt độ thấp hơn so với nguyên liệu thô trong quá trình sản xuất ban đầu. Thủy tinh tái chế giúp tiết kiệm năng lượng, nước và tài nguyên thiên nhiên (bao gồm cả cát thạch anh). \n \n",
        "Điều quan trọng hơn là không phải mọi vật dụng bị vỡ và thường được coi là thủy tinh đều có thể được đúc lại. Các thành phần và nhiệt độ nóng chảy khác nhau làm cho một số thủy tinh không thể tái chế: kính cửa sổ, bóng đèn, cũng như ly uống nước.\n \n",
        "- Những loại thủy tinh được cho vào thùng rác màu xanh. \n \n   ",
        "+ Chai thủy tinh - rõ ràng và có màu sắc (cả chai rượu vang) \n \n   ",
        "+ Lọ thực phẩm (không có nắp kim loại) \n \n   ",
        "+ Hộp đựng mỹ phẩm thủy tinh \n \n",
        "- Những loại không được cho vào thùng rác màu xanh. \n \n   ",
        "+ Ly uống nước \n \n   ",
        "+ Bộ hộp đồ ăn \n \n   ",
        "+ Kính cửa sổ và gương \n \n   ",
        "+ Bóng đèn \n \n   ",
        "+ Nến mộ \n \n",
        "- Những thứ có thể được tạo ra từ việc tái chế thủy tinh. \n \n   ",
        "+ Hộp đựng bằng thủy tinh \n \n   ",
        "+ Kính quang học \n \n   ",
        "+ Vật liệu xây dựng",
      ],
      imgPost2: require("../storage/imgs/list_news/img4_1.png"),
      postTitle2: "Đấu tranh giấy cho cây",
      content2: [
        "Người ta ước tính rằng thế giới sản xuất 10 tấn giấy mỗi giây. Bất chấp những vấn đề về số lượng sách báo và tạp chí, cũng như nhiều chiến dịch để ngăn chặn việc lãng phí giấy, việc sử dụng giấy ở Việt Nam gần như gấp đôi mức trung bình thế giới. \n \n",
        "Mặc dù giấy có thể được tái chế tới 4 lần, vật liệu tái chế sẽ không mịn và trắng như tuyết như loại đầu tiên, bởi vì các sợi xen-lu-lo-zo có chất lượng giảm dần. Tuy nhiên, giấy hoặc bìa cứng màu xám có rất nhiều tác dụng, trong khi tái chế 1 tấn giấy giúp tiết kiệm được 17 cái cây, tức là 1 acre rừng (lượng cần để sản xuất ra 1 tấn giấy). \n \n",
        "Để có thể phân loại giấy đúng cách, chúng ta cần chú ý đến những loại rác hàng ngày thường vô tư vứt vào thùng. Thùng tái chế màu xanh lam không được chứa khăn giấy hoặc khăn màn, cũng như là biên lai mua sắm. \n \n",
        "- Những loại giấy được cho vào thùng rác màu xanh lam \n \n   ",
        "+ Báo và tạp chí \n \n   ",
        "+ Giấy văn phòng: Tài liệu in, quảng cáo, tờ rơi, bìa sách \n \n   ",
        "+ Bao bì các tông \n \n   ",
        "+ Giấy bìa \n \n",
        "- Những loại giấy không được cho vào thùng rác màu xanh lam \n \n   ",
        "+ Khăn giấy và giấy lau đã dùng rồi \n \n   ",
        "+ Hóa đơn mua hàng \n \n   ",
        "+ Bao bì các tông bẩn và dính dầu mỡ (như hộp đựng pizza) \n \n   ",
        "+ Vỏ hộp sữa hoặc nước ép \n \n   ",
        "+ Giấy tráng \n \n",
        "- Những thứ có thể được tạo ra từ việc tái chế giấy \n \n   ",
        "+ Hộp đựng trứng \n \n   ",
        "+ Bộ lọc cà phê \n \n   ",
        "+ Giấy vệ sinh và khăn tắm dùng một lần \n \n   ",
        "+ Giấy văn phòng",
      ],
      imgPost3: require("../storage/imgs/list_news/img4_2.png"),
    },
    {
      id: 5,
      title: "Nguồn gốc và tác hại của rác thải nhựa",
      img: require("../storage/imgs/list_news/img5.jpg"),
      view: "4k",
      imgPost1: require("../storage/imgs/list_news/img5_1.png"),
      content: [
        "Những con số thống kê lượng sử dụng túi nilon, chai nhựa cho thấy tình hình rác thải nhựa ở Việt Nam thật đáng lo ngại. \n \n    ",
        "- Theo Bộ Tài nguyên và Môi trường, mỗi tháng, mỗi gia đình sử dụng đến 1kg túi nilon. Ở những thành phố lớn như Hà Nội và Hồ Chí Minh, số lượng rác thải nhựa mỗi ngày thải ra môi trường lên tới 80 tấn. \n \n    ",
        "- Còn theo thống kê của Hiệp hội nhựa Việt Nam thì trong khoảng thời gian 1990 – 2015 số lượng tiêu thụ nhựa ở Việt Nam đã tăng lên chóng mặt, từ 3,8 kg/người/năm lên đến 41 kg/người/năm. \n \n",
        "Trong khi đó, lĩnh vực xử lý và tái chế nhựa ở Việt Nam chưa phát triển, nên đa số rác thải được chôn lấp, đốt hoặc thải thẳng ra môi trường. \n \n    ",
        "- Đơn cử ở thành phố Hồ Chí Minh, trong 250.000 tấn rác thải nhựa thì có 48.000 tấn được đem đi chôn lấp, hơn 200.000 tấn được tái chế hoặc thải thẳng ra môi trường. \n \n    ",
        "- Còn theo ông Đặng Huy Đông, Nguyên Thứ trưởng Kế hoạch đầu tư cho rằng chỉ có 10% rác thải nhựa Việt Nam được đem đi tái chế, còn lại hơn 90% được đem đi chôn, lấp hoặc xả ra môi trường. \n \n",
        "Những con số ở trên cho thấy tình hình rác thải nhựa ở Việt Nam thật đáng báo động, đòi hỏi chúng ta phải chung tay, nâng cao ý thức cá nhân mới có thể cùng nhau bảo vệ môi trường.",
      ],
      postTitle1:
        "Nguồn gốc làm tăng lượng rác thải nhựa, tăng mối nguy hại cho môi trường",
      content1: [
        "Vậy nguồn gốc làm tăng rác thải nhựa là do đâu? Theo chúng tôi, nguồn gốc phát sinh rác thải nhựa xuất phát từ sự tiện lợi trong tiêu dùng của các sản phẩm nhựa. \n \n    ",
        "- Cuộc sống nhộn nhịp vội vã khiến nhiều người thích sử dụng đồ nhựa 1 lần, bởi chúng nhanh, gọn, không cần rửa, lau chùi, dọn dẹp. Tuy nhiên, họ không hề biết rằng những loại nhựa này mất hàng trăm năm, thậm chí hàng ngàn năm mới có thể phân hủy được. Trong khoảng thời gian đó, nó đã gây ra bao tác hại cho môi trường.\n \n    ",
        "- Nhiều người tiêu dùng không suy nghĩ, cứ thấy các sản phẩm bằng nhựa rẻ, đẹp là sử dụng mà chẳng quan tâm chúng có ảnh hưởng tới môi trường về sau\n \n",
        "Sau những đêm ca nhạc, lễ hội là những bãi rác được các bạn trẻ để lại nhiều vô số. Họ để rác thải nhựa trên khắp đường phố, lẫn trong các lùm cây,… khiến cho việc thu gom, phân loại, xử lý và tái chế số lượng rác thải nhựa này thêm khó khăn.",
      ],
      imgPost2: require("../storage/imgs/list_news/img5_2.png"),
      postTitle2:
        "Hành động ngay để bảo vệ bản thân, làm đẹp Việt Nam, làm sạch trái đất ",
      content2: [
        "Để bảo vệ bản thân, làm đẹp Việt Nam, làm sạch trái đất, không còn cách gì hơn là chúng ta cần phải hạn chế lượng rác thải nhựa thải ra môi trường bằng một số biện pháp sau:\n \n    ",
        "- Sau khi sử dụng đồ nhựa, hãy vất bỏ vào thùng rác, điểm thu gom, tránh vứt bừa bãi.\n \n    ",
        "- Hạn chế sử dụng đồ nhựa, nhất là đồ nhựa sử dụng một lần và thay thế bằng đồ sử dụng nhiều lần từ vải, sứ, gỗ, tre,… \n \n    ",
        "- Mỗi người và gia đình cần phân loại rác thải nhựa trước khi mang ra bãi rác hoặc để người thu gom rác đến xử lý giúp việc tái chế nhựa dễ dàng hơn \n \n    ",
        "- Các tổ chức, doanh nghiệp, nhà hàng, khách sạn,… và mỗi cá nhân phải chung tay bảo vệ môi trường bằng cách hạn chế dùng cốc nhựa, túi nilon, các đồ dùng nhựa 1 lần và thay vào đó hãy sử dụng sản phẩm sinh học thân thiện với môi trường.\n \n",
        "Tình trạng rác thải nhựa ở Việt Nam cho thấy đây không chỉ còn là vấn đề của các cấp chính quyền, nhà nước mà còn là vấn đề của mỗi một cá nhân. Vì thế, mỗi người chúng ta hãy chung tay, góp sức đẩy lùi tình trạng ô nhiễm rác thải nhựa ở VIệt Nam bạn nhé.",
      ],
      imgPost3: require("../storage/imgs/list_news/img1_3.jpg"),
    },
    {
      id: 6,
      title:
        "Thông tin về các loại nhựa và thống kê rác thải nhựa tới năm 2021",
      img: require("../storage/imgs/list_news/img6.jpg"),
      view: "4k",
      imgPost1: require("../storage/imgs/list_news/img6_1.png"),
      content: [
        "Chúng tôi hi vọng số liệu thống kê về chất thải nhựa dưới đây sẽ có tác động lớn nhất đến các chương trình tái chế và kế hoạch kinh doanh của bạn trong năm tới? Dưới đây là câu trả lời cho những câu hỏi được hỏi nhiều nhất về rác thải nhựa, ô nhiễm và tái chế tới năm 2021. \n \n",
        "Theo một nghiên cứu gần đây, vào năm 2030, khoảng 53 triệu tấn nhựa sẽ tồn tại trong các đại dương, sông và hồ của chúng ta. Đó là có những nỗ lực toàn cầu hiện đang được tiến hành nhằm giảm thiểu rác thải nhựa! \n \n",
        "Chúng tôi xin cung cấp đến bạn 7 số liệu thống kê về rác thải nhựa, hi vọng sẽ giúp bạn có thêm thông tin trong việc hoạch định chiến lược kinh doanh, sản xuất để góp phần bảo vệ môi trường, giữ gìn một môi trường xanh, sạch đẹp cho con em chúng ta trong tương lai.",
      ],
      postTitle1: "Có bao nhiêu nhựa trên thế giới",
      content1: [
        "Tính đến nay trên thế giới có khoảng 8,2 tỷ tấn nhựa. Khoảng 6,3 tỷ trong đó là rác. Hãy tưởng tượng bạn sẽ cần tốn 55 triệu máy bay Boeing 747 cỡ lớn để chợ hết số nhựa đó. \n \n",
        "Vào năm 1950 chúng ta thải ra 2 triệu tấn một năm, tới năm 2015 chúng ta đã tạo nên số lượng rác thải nhựa hàng năm gấp 200 lần.",
      ],
      imgPost2: require("../storage/imgs/list_news/img6_2.png"),
      postTitle2: "Nhựa tái chế 100% được không?",
      content2: [
        "Câu trả lời là được nếu bạn sử dụng một thế hệ nhựa mới. Một thế hệ nhựa mới đã được phát triển bởi các nhà khoa học, vật liệu này giúp cho việc tái chế dễ dàng và rẻ hơn so với các loại nhựa truyền thống. Và đã có những sản phẩm được làm từ loại nhựa mới này, nhưng chúng ta phải nhớ một điều quan trọng là không phải chỉ cần sử dụng nhựa đó thì 100% bạn có thể tái chế, mà còn các quy trình, cách thức khác quan trọng liên quan để các sản phẩm này được tái chế 100% nữa. \n \n",
        "Ngoài ra bạn có thể sử dụng một số sản phẩm thay thế nhựa trong quá trình sản xuất. Ví dụ như Weilburger vừa mới giới thiệu một loại chất tráng phủ chống thấm nước, bạn có thể dùng loại tráng phủ này với giấy thường để thay thế cho vật liệu PET trong các bao bì thực phẩm, vật liệu gói hàng,…",
      ],
      imgPost3: require("../storage/imgs/list_news/img1_3.jpg"),
    },
    {
      id: 7,
      title: "Thực trạng về thức ăn thừa lãng phí",
      img: require("../storage/imgs/list_news/img7.jpg"),
      view: "4k",
      imgPost1: require("../storage/imgs/list_news/img7_1.png"),
      content: [
        'Số liệu thống kê mới đây cảnh báo tình trạng lãng phí thực phẩm có thể gia tăng tới 33% vào năm 2030. Chất thải thực phẩm có thể tăng gần 1/3 vào năm 2030 khi hơn 2 tỷ tấn sẽ hết hạn, các nhà nghiên cứu vừa cho biết, cảnh báo về một cuộc khủng hoảng "đáng kinh ngạc" của dân số thế giới đang bùng nổ và thay đổi thói quen ở các nước đang phát triển. \n \n',
        "Liên Hiệp Quốc đã đặt ra mục tiêu giảm một nửa tổn thất thực phẩm và chất thải vào năm 2030. Nhưng nghiên cứu của Nhóm Tư vấn Boston (BCG) cho thấy nếu xu hướng hiện tại tiếp tục, nó sẽ tăng lên 2,1 tỷ tấn mỗi năm tương đương với một số tiền trị giá 1,5 nghìn tỷ USD. \n \n",
      ],
      content1: [
        '"Chúng tôi đang chứng kiến ​​một cuộc khủng hoảng thực sự ở cấp độ toàn cầu", một trong những tác giả của nghiên cứu, Esben Hegnsholt nói với Quỹ Thomson Reuters.\n \n',
        '"Lượng chất thải và các tác động xã hội, kinh tế và môi trường là nghiêm trọng nếu chúng ta không thay đổi quỹ đạo. Khi chúng ta vứt thức ăn thừa và chất thải, chúng ta cũng góp phần làm nóng toàn cầu."\n \n',
        "Khoảng 1/3 tỷ tấn thực phẩm mỗi năm, trị giá khoảng 1,2 nghìn tỷ đô la. Hegnsholt, một đối tác và Giám đốc điều hành của công ty tư vấn quản lý cho biết, rất nhiều thức ăn bị lãng phí trên thế giới trong mỗi bữa tiệc. Và chúng sẽ đi về đâu?\n \n",
      ],
      imgPost2: require("../storage/imgs/list_news/img7_2.png"),
      content2: [
        "Báo cáo của BCG kêu gọi các công ty “cập nhật” để đảm bảo nguồn cung thực phẩm phù hợp nhu cầu khách hàng. Các quốc gia cần nỗ lực đầu tư vào cơ sở hạ tầng, nâng cao tầm hiểu biết của nông dân và người mua hàng về vấn đề này.\n \n",
        "Bà Unnikrishnan nhấn mạnh: “Đây không phải là vấn đề đơn giản. Không một quốc gia, một thực thể đơn lẻ nào có thể giải quyết tận gốc vấn đề này một mình”.\n \n",
        "Liz Goodwin, Giám đốc chương trình giảm cân và lãng phí thực phẩm tại Viện Tài nguyên Thế giới, cho biết báo cáo nêu lên những vấn đề nghiêm trọng nhưng đã giải thích một số giải pháp.\n \n",
        '"Nó kết nối với cách thức cuộc sống của chúng ta đã thay đổi và thực tế là thực phẩm hiện nay rẻ hơn rất nhiều", cô nói, cũng trích dẫn một nhu cầu ngày càng tăng về sự tiện lợi và thiếu kỹ năng nấu ăn trong các thế hệ trẻ.\n \n',
        "Goodwin cho biết bà tin rằng các biện pháp cắt giảm lãng phí đã có hiệu lực, và thế giới sẽ ít nhất là trên đường đạt mục tiêu giảm 50% vào năm 2030.\n \n",
        'Người tiêu dùng, doanh nghiệp và nhà quản lý tất cả sẽ phải đóng một vai trò trong việc thúc đẩy thay đổi. "Chúng tôi cần thay đổi thái độ của chúng tôi đối với chất thải thực phẩm - tôi nghĩ chúng ta cần phải đến mức không thể chấp nhận để ném thức ăn vào thùng rác", cô nói.',
      ],
      imgPost3: require("../storage/imgs/list_news/img7.jpg"),
    },
    {
      id: 8,
      title: "Tái chế đã giúp ích cho môi trường như thế nào?",
      img: require("../storage/imgs/list_news/img8.jpg"),
      view: "4k",
      imgPost1: require("../storage/imgs/list_news/img8_1.jpg"),
      content: [
        "Mọi người ngày càng nhận thức rõ hơn về sự cần thiết trong việc tái chế. Khả năng đưa các sản phẩm đã được sử dụng trước đó trở lại thị trường là một lợi ích lớn. Hôm nay, chính xác, chúng ta sẽ biết một số lợi ích chung và lợi ích về kinh tế của việc tái chế. \n \n",
        "Một trong những lợi ích chung của tái chế được biết đến nhiều nhất là giảm ô nhiễm. Khi một người tái chế chất thải gia đình hoặc một công ty tái chế chất thải công nghiệp của họ, những gì đạt được là lượng rác và chất thải giảm xuống. Sự tích tụ của chất thải này trên mặt đất sinh ra khí độc có tác động tiêu cực đến môi trường. \n \n",
        "Tái chế cho phép chúng ta tiết kiệm năng lượng. Điều này đạt được bằng cách tái sử dụng vật liệu, có nghĩa là năng lượng không bị lãng phí. Chúng ta cần rất nhiều năng lượng để chiết xuất và biến đổi vật liệu thành sản phẩm. Bằng cách tái sử dụng những sản phẩm này thông qua tái chế, các công ty, nhà máy và ngành công nghiệp sẽ không phải sử dụng quá nhiều năng lượng để có được nguyên liệu thô.",
      ],
      postTitle1: "Những lợi ích của việc tái chế nhựa cho môi trường",
      content1: [
        "Một lượng lớn chất thải khác có thể được tái chế, bao gồm cả túi nhựa và các sản phẩm điện tử. Nói cách khác, tái chế các sản phẩm cũ có thể tạo ra nguồn cung cấp các sản phẩm mới giống như chúng. \n \n",
        "Tái chế có rất nhiều lợi ích và với sự giúp ích của công nghệ mới giúp tái chế được nhiều vật liệu hơn, với sự giúp đỡ của mọi người, chúng ta có thể làm sạch Trái đất. Tái chế không chỉ có lợi cho môi trường mà còn có tác dụng tích cực đối với nền kinh tế.\n \n",
        "Việc tái chế được ghi nhận trong suốt lịch sử loài người, nhưng nó đã trải qua một chặng đường dài kể từ thời Plato khi con người sử dụng lại các công cụ và đồ gốm bị hỏng khi nguyên liệu khan hiếm. Ngày nay, có vô số lợi ích đến từ việc tái chế, cũng như hàng tấn vật phẩm có thể được tái chế.\n \n",
        "Những lợi ích mang lại rất sâu rộng và tất cả mọi người đều được hưởng lợi khi mọi người áp dụng tái chế như một thói quen hàng ngày. Cho dù đó là nỗ lực của cộng đồng để giúp làm đẹp một con phố bẩn thỉu trong khu phố hay ở quy mô lớn hơn để giúp một doanh nghiệp tiết kiệm hàng trăm nghìn đô la trong việc quản lý chất thải, thì những lợi thế của một chương trình tái chế được duy trì tốt là vô tận.",
      ],
      imgPost2: require("../storage/imgs/list_news/img8_2.png"),
      postTitle2: "Lợi ích của tái chế ở trong cộng đồng",
      content2: [
        "Có thể, nhiều người trong chúng ta tái chế một cách bình thường, nhưng chúng ta không thực sự biết những lợi ích tuyệt vời của việc tái chế. Để khuyến khích những người trong số các bạn vẫn không tái chế hoặc cảm thấy tự hào về việc đó, chúng tôi sẽ nói cho các bạn về những ưu điểm chính của việc tái chế. \n \n",
        "Bằng cách này, chúng ta có thể kéo dài vòng đời của sản phẩm, tiết kiệm nguyên liệu và mang lại lợi ích cho môi trường bằng cách tạo ra ít chất thải hơn. Việc tái chế được thực hiện không chỉ để loại bỏ chất thải mà còn để giải quyết tình trạng cạn kiệt tài nguyên thiên nhiên của hành tinh. \n \n",
        "Trước hết, khi chúng ta tái chế một thùng chứa hoặc sản phẩm, chúng ta đang ngăn chúng được lưu trữ trong các bãi chôn lấp lớn, một số trong số chúng không được kiểm soát và quá lớn. Bằng cách tái chế, chúng tôi sẽ đảm bảo rằng các bãi chôn lấp mới không đợc tạo ra và các bãi chôn lấp hiện có được quản lý theo cách có kiểm soát hơn, điều này chắc chắn sẽ cải thiện môi trường ở những khu vực có chúng. \n \n",
        "Người ta ước tính rằng lượng khí thải khi sản xuất một sản phẩm mới từ vật liệu tái chế thấp hơn 20% so với khi chúng được sản xuất từ vật liệu mới. Tất cả những điều này phải được cộng thêm vào việc tiết kiệm môi trường từ việc không khai thác các vật liệu này và quá trình vận chuyển sau đó của chúng.",
      ],
      imgPost3: require("../storage/imgs/list_news/img1_1.jpg"),
    },
    {
      id: 9,
      title: "Chúng ta đã bắt đầu tái chế từ lúc nào?",
      img: require("../storage/imgs/list_news/img9.jpg"),
      view: "4k",
      imgPost1: require("../storage/imgs/list_news/img8_1.jpg"),
      content: [
        "Tái chế là một trong những hoạt động hàng ngày đơn giản và bổ ích nhất mà chúng ta có thể thực hiện. Nhiều đến mức bất kỳ thành viên nào trong gia đình cũng có thể tham gia, kể cả những thành viên nhỏ tuổi nhất trong gia đình. Khuyến khích con trai và con gái của bạn thực hành nó, học tập và niềm vui luôn song hành với nhau! \n \n",
        "Tất cả các thành phố trên đất nước chúng ta đều cung cấp cho chúng ta những thùng chứa để chúng ta có thể chứa mọi loại chất thải, cho dù đó là chất hữu cơ, giấy, nhựa hay thủy tinh. Ngoài ra còn có những điểm mà bạn có thể mang theo các đồ vật như thiết bị điện hoặc gỗ. \n \n",
        "Mặt khác, bạn có thể đặt các thùng chứa trong nhà để tạo điều kiện tái chế đúng sản phẩm đã tiêu thụ và giúp phát triển nền giáo dục đúng đắn trong cả gia đình, cũng như thay đổi lương tâm ở những người xung quanh chúng ta.\n \n",
        "Bằng cách này, chúng ta sẽ tiết kiệm một lượng tài nguyên thiên nhiên quan trọng và chúng ta sẽ bảo tồn, rừng của chúng ta cùng với những thứ khác,, cái gọi là lá phổi của hành tinh, có công việc cơ bản là khử ô nhiễm môi trường.",
      ],
      postTitle1: "Lịch sử của tái chế nhựa",
      content1: [
        "Một trong những lĩnh vực mà chính phủ thúc đẩy người dân giúp đỡ các chiến si là tiết kiệm và tái chế vật liệu. Họ được cho biết rằng nếu họ tặng một chiếc xẻng, nó có thể được sử dụng để làm lựu đạn cầm tay hoặc các bộ phận của xe tăng; ống son môi có thể được sử dụng để làm hộp đạn, và thậm chí lá nhôm từ kẹo cao su cũng có thể được sử dụng để chế tạo máy bay. Chính vì vậy, nhiều người Mỹ đã cộng tác trong nghĩa vụ yêu nước của họ và rất nhiều lần quyên góp nồi, chảo nhôm và các vật dụng hàng ngày khác đã được tái chế để trở thành máy bay chiến đấu và máy bay ném bom. Trong thời chiến, nhôm là một kim loại khan hiếm và hầu như tất cả nhôm có sẵn đều được sử dụng cho ngành hàng không trong chiến tranh, nhưng bất kỳ kim loại nào cũng được chấp nhận. \n \n",
        "Trong xã hội hiện tại mà chúng ta đang sống, sự gia tăng tiêu dùng mang lại cho chúng ta nhiều lợi ích mà tất cả chúng ta cuối cùng đều được tận hưởng, tuy nhiên, chúng ta thậm chí không nghĩ rằng tất cả những điều này mang lại những nghĩa vụ và trách nhiệm mà tất cả chúng ta phải đảm nhận; bởi vì lượng chất thải mà chúng ta tạo ra ngày càng tăng và do đó gây ra thiệt hại lớn hơn cho thiên nhiên bởi việc sử dụng một cách vô ý thức các nguồn tài nguyên thiên nhiên không thể tái tạo.",
      ],
      imgPost2: require("../storage/imgs/list_news/img8_2.png"),
      postTitle2: "Sự quan trọng của tái chế",
      content2: [
        "Nguồn cư dân là các hộ gia đình tư nhân; nguồn thương mại là các cửa hàng, quán bar, nhà hàng và các doanh nghiệp nói chung; và nguồn công nghiệp là các công ty và ngành công nghiệp. Chất thải được tạo ra ở mỗi nơi này có thể được tách ra để tái chế thông qua các thùng chứa tái chế khác nhau. \n \n",
        "Liên kết này không phải lúc nào cũng có trong chuỗi. Đó là một nhà máy thu gom rác thải nhằm thu gom càng nhiều càng tốt và tận dụng việc vận chuyển mà không cần thực hiện các chuyến đi với một lượng rác thải nhỏ. Một ví dụ là nhà máy xử lý giấy và bìa cứng. Họ thu thập tất cả các vật liệu đó, ép vào các thùng lớn và từ đó đưa nó đến điểm đến tiếp theo. Điều này giúp giảm chi phí vận chuyển. \n \n",
        "Đây là yếu tố chính của quá trình tái chế. Ở bước này, chất thải được tách ra và phân loại, để mọi thứ được thống nhất và thu gom theo nhóm để có thể vận chuyển riêng. Điều này tạo điều kiện thuận lợi và đẩy nhanh công việc của các nhà máy xử lý và tái chế.",
      ],
      imgPost3: require("../storage/imgs/list_news/img1_1.jpg"),
    },
    {
      id: 10,
      title: "Căn bản của việc tái sử dụng và giảm thiểu",
      img: require("../storage/imgs/list_news/img10.png"),
      view: "4k",
      imgPost1: require("../storage/imgs/list_news/img10_1.jpg"),
      content: [
        "Cách hiệu quả nhất để giảm lãng phí là không tạo ra nó ngay từ đầu. Việc tạo ra một sản phẩm mới sẽ thải ra khí nhà kính góp phần gây ra biến đổi khí hậu và đòi hỏi nhiều nguyên liệu và năng lượng - nguyên liệu thô phải được khai thác từ trái đất, và sản phẩm phải được chế tạo sau đó vận chuyển đến bất cứ nơi nào nó sẽ được bán. Do đó, giảm thiểu và tái sử dụng là những cách hiệu quả nhất để bạn có thể tiết kiệm tài nguyên thiên nhiên, bảo vệ môi trường và tiết kiệm tiền.",
      ],
      postTitle1: "Lợi ích của giảm thiểu và tái sử dụng",
      content1: [
        "Giảm phát thải khí nhà kính góp phần gây ra biến đổi khí hậu. \n \n",
        "Ngăn ngừa ô nhiễm do giảm nhu cầu thu hoạch nguyên liệu thô mới. \n \n",
        "Tiết kiệm năng lượng. \n \n",
        "Giảm phát thải khí nhà kính góp phần gây ra biến đổi khí hậu toàn cầu. \n \n",
        "Giúp duy trì môi trường cho các thế hệ tương lai. \n \n",
        "Giảm lượng chất thải cần được tái chế hoặc đưa đến các bãi chôn lấp và lò đốt. \n \n",
        "Cho phép các sản phẩm được sử dụng ở mức tối đa của chúng. \n \n",
        "Tiết kiệm tiền.",
      ],
      imgPost2: require("../storage/imgs/list_news/img8_2.png"),
      postTitle2: "Ý tưởng về những cách để giảm thiểu và tái sử dụng",
      content2: [
        "Hãy suy nghĩ về sống xanh trước khi bạn mua sắm. Giảm phát thải khí nhà kính bằng cách suy nghĩ xanh khi bạn mua sắm. \n \n",
        "Giảm lãng phí thực phẩm của bạn bằng cách mua sắm thông minh, mua những thứ bạn cần, ủ rác thực phẩm và quyên góp thực phẩm không sử dụng cho các ngân hàng thực phẩm hoặc nơi trú ẩn. Nhiều cách khác để giảm tác động của bạn lên môi trường. \n \n",
        "Tái sử dụng các vật dụng như quần áo cũ, túi đựng hàng tạp hóa bằng vải và hộp đựng để tránh lãng phí.\n \n",
        "Mua các vật dụng đã qua sử dụng để giảm thiểu chất thải cũng như khí thải do sản xuất vật liệu mới hoặc thải bỏ chúng tại các bãi chôn lấp. Quyên góp quần áo, đồ điện tử và vật liệu xây dựng không dùng đến để đảm bảo những người khác cũng có thể tái sử dụng chúng!\n \n",
        "Mua các sản phẩm được làm bằng nội dung tái chế. Kiểm tra nhãn để xem sản phẩm hoặc bao bì của nó có được làm từ vật liệu tái chế hay không.\n \n",
        "Hãy tìm hiểu trước khi bạn vứt đồ đi. Hãy tìm hiểu về chương trình tái chế địa phương của bạn thu thập những vật dụng nào và khuyến khích hộ gia đình của bạn tái chế đúng cách và tái chế nhiều hơn.\n \n",
        "Tìm hiểu về những việc bạn có thể làm ở nhà, ở trường, ở cơ quan và trong cộng đồng của bạn!\n \n",
        "Bảo dưỡng và sửa chữa các sản phẩm, chẳng hạn như quần áo, lốp xe và các thiết bị gia dụng để chúng không phải vứt bỏ và thay thế thường xuyên.\n \n",
        "Mượn, thuê hoặc chia sẻ các vật dụng không thường xuyên được sử dụng, chẳng hạn như đồ trang trí, dụng cụ hoặc đồ đạc trong bữa tiệc.",
      ],
      imgPost3: require("../storage/imgs/list_news/img1_1.jpg"),
    },
  ];
  return news.map((data, index) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Detail", {
            title: data.title,
            img: data.img,
            view: data.view,
            content: data.content,
            imgPost1: data.imgPost1,
            postTitle1: data.postTitle1,
            content1: data.content1,
            imgPost2: data.imgPost2,
            postTitle2: data.postTitle2,
            content2: data.content2,
            imgPost3: data.imgPost3,
          })
        }
        key={data.id}
      >
        <View
          key={data.id}
          style={{
            width: "90%",
            height: 95,
            marginHorizontal: "5%",
            flexDirection: "row",
            marginBottom: 16,
          }}
        >
          <View>
            <Image source={data.img} style={{ width: 82, height: 90 }} />
          </View>
          <View style={{ marginLeft: 20 }}>
            <View style={{ width: "85%", height: 60 }}>
              <Text>{data.title}</Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Feather name="user" />
              <Text> {data.view}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  });
};

export default List_news_nav;
