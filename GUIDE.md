# Giải thích ý tưởng của các bài toán trong báo cáo

Bài toán mục tiêu (Bài toán phần 3.4) là đi cực tiểu $R_L$ cho $PU$ và $SU$, đảm bảo xác suất truyền $p_{tx}$ không thấp hơn ngưỡng mà hai bên chọn trước.

- $R_L$ được biểu diễn chi tiết ở các công thức (4.8), (4.9) và (4.12), (4.13). Trong đó (4.9) và (4.13) là công thức với hai trường hợp đặc biệt ($l = 1$ - khi mà (4.8) và (4.12) không xác định), chúng là các công thức độc lập nhau được dẫn xuất từ công thức
- $p_{tx}$ được biểu diễn chi tiết ở các công thức (4.16) và (4.17)

**Chú ý biến tối ưu là $p_P$ và $p_S$**.

## Ba Bổ đề 1, 2, 3 để làm gì?

Ba Bổ đề này là các kết quả đánh giá phân phối tích lũy và xác định kỳ vọng của các biến ngẫu nhiên đại diện cho các đại lượng dùng trong bài toán tối ưu gốc.

## Tại sao lại có Bổ đề 4?

Điều kiện ràng buộc của bài toán mục tiêu là dựa trên ngưỡng **dưới** cho các $p_{tx}$ và các ngưỡng dưới này ($\sigma^P$ và $\sigma^S$) là tham số mà các bên chọn cho mình.

Giả sử trong một điều kiện truyền tin rất tệ, xác suất truyền tin cho PU **tối đa** chỉ là 0.3 nhưng anh ta lại đòi hỏi $\sigma^P = 0.4$ thì rõ ràng không thể đạt được. Thậm chí, nếu anh ta đòi $\sigma^P = 0.3$ thì chỉ có thể đạt được khi anh ta phát với công suất tối đa và không có can nhiễu từ SU (tức là SU không tham gia cùng truyền).

Do đó, Bổ đề 4 và các công thức (4.18) dùng để xác định ngưỡng tối đa cho $p_{tx}$ và cũng là ngưỡng tối đa có thể xác định cho các $\sigma$.

## Tại sao lại có Bổ đề 5?

Bổ đề 4 là công thức dẫn xuất đơn giản cho các điều kiện ràng buộc của bài toán tối ưu mục tiêu. Ở bổ đề 4, ta chỉ **xem xét độc lập từng bên**: _Giá trị lớn nhất được tìm trực tiếp trên công thức của $p_{tx}$\_.

Trong khi bài toán có sự tương tác giữa hai bên, mà rõ ràng khi một bên được tăng $p_{tx}$ thì bên còn lại sẽ giảm $p_{tx}$. Do đó Bổ đề 5 phân tích kỹ hơn các điều kiện ràng buộc của bài toán tối ưu gốc, cụ thể là đi xem tính chất của các tham số $\sigma^P$ và $\sigma^S$.

Do $PU$ có quyền ưu tiên hơn nên anh ta sẽ **chọn trước** cho mình $\sigma^P$. Còn $SU$, với vai trò là bên giải bài toán tối ưu, anh ta cần chọn $\sigma^S$ để mà mình có thể được truyền tin cùng với $PU$ (khi mà các điều kiện ràng buộc của bài toán tối ưu gốc được thỏa mãn).

Giá trị lớn nhất của $\sigma^S$ (khi đã biết $\sigma^P$) được xác định khi giải bài toán tối ưu trong Bổ đề 5.

## Tại sao lại có Bổ đề 6?

Như đã phân tích bài toán tối ưu gốc trong Chương 3 thì $PU$ và $SU$ chỉ hợp tác khi mà $PU$ kiếm được lợi ích từ việc hợp tác này, mà ưu tiên hơn cả là việc truyền tin an toàn. Cụ thể ra thì **$PU$ chỉ hợp tác (và chia sẻ phổ với $SU$) khi mà $SU$ có thể làm việc truyền tin của $PU$ tốt hơn hẳn khi chỉ có $PU$ truyền một mình**.

Do đó, với vai trò là bên giải bài toán tối ưu, $SU$ cần xem xét việc hợp tác có thể xảy ra hay không.

Các công thức (4.23) và (4.25) thực hiện phân tích các đại lượng tại $PU$ trong điều kiện chỉ có $PU$ truyền (**NC** - non-cooperative).

## Giải quyết bài toán tối ưu gốc như thế nào?

Bài toán tối ưu gốc là tối ưu đa mục tiêu, có thể giải quyết trực tiếp bằng một MOOP Algorithm nhưng sau đó $SU$ cần phải chọn một nghiệm thỏa mãn expectation.

Thay vào đó, đồ án đề xuất hai expectation cho $SU$

- **Selfish** (**SF**): $SU$ chỉ tập trung cho lợi ích của mình trước (hiệu năng của $SU$ phải tốt nhất có thể), những yêu cầu do $PU$ đặt ra ($R_L$ và $p_{tx}$) thì chỉ cần đạt được thôi, không cần tối ưu quá làm gì.
- **Competitive** (**CP**): $SU$ được đặt vào bối cảnh phải cạnh tranh với các $SU$ khác. Khi đó anh ta cần ưu tiên làm sao mình được chọn truyền tin trước đã, những hiệu năng khác chỉ cần dừng ở mức đủ dùng thôi. Khi đó, $SU$ sẽ giải bài toán tối ưu gốc để mà hiệu năng của $PU$ là tốt nhất có thể (vì còn phụ thuộc vào điều kiện kênh truyền nữa).

Các kết quả ở phần mô phỏng số liệu sẽ tập trung phân tích mối tương quan giữa kết quả của ba bài toán **NC**, **SF** và **CP** này, tất nhiên là trong cùng một điều kiện kênh truyền (8 kênh truyền như trong Mô hình hệ thống Hình 3.1)

# Giải thích biểu đồ và số liệu

Dựa trên mô phỏng số liệu của một số bài báo thì lựa chọn $R_b = 1.0, R_s=0.8$.

Trong quá trình thực hiện chạy code thì có một chút sai sót khi để $P_{max}$ hơi nhỏ (chỉ bằng 20 lần công suất nhiễu), nhưng có lẽ không ảnh hưởng tới main point của bài toán.

Trong phần mô phỏng sẽ sử dụng thêm hai tham số là $\rho^P$ và $\rho^S$, cũng chỉ là giá trị tương đối thay thế cho $\sigma$. Vì $\sigma$ bị chặn trên bởi xác suất truyền tối đa $p_{tx-max}$, mà xác suất truyền tối đa lại phụ thuộc vào điều kiện kênh truyền, nên nếu cố định $\sigma$ khi chạy code thì rất rủi ro (có thể vượt quá ngưỡng trên của nó). Thay vào đó chỉ xác định giá trị tương đối kiểu như: _Tôi chỉ cần xác suất truyền bằng 80% ($\rho=0.8$) so với xác suất truyền tối đa tôi có thể đạt được (với điều kiện kênh truyền này)_.

## Mục 5.3

Tham số $\sigma^P$ và $\sigma^S$ đều đóng vai trò rất quan trọng trong 3 bài toán **NC, SF, CP**, vì nó đại diện cho truyền tin tin cậy, mà vốn dĩ truyền tin tin cậy và truyền tin an toàn rất khó cùng đạt được: Càng muốn truyền tin tin cậy $\sigma$ cao thì phải hy sinh truyền tin an toàn $R_L$.

Do đó trong phần này, trước hết cần đánh giá xem cần chọn $\sigma$ thế nào cho hợp lý. Cụ thể nó trả lời cho câu hỏi: **_Với một bộ ($\sigma^P$, $\sigma^S$) (mà trong mô phỏng được thay thế bằng ($\rho^P$, $\rho^S$)) thì xác suất bao nhiêu để bài toán tối ưu có nghiệm, cụ thể là tập $G(p_P, p_S)$ không rỗng._**

Ví dụ trong Hình 5.1 thì nếu $\rho^P=0.1$ và $\rho^S=0.4$ thì có khoảng 75% cơ hội hai bên có thể hợp tác (trong 50000 mẫu thử thì khoảng 37500 mẫu thỏa mãn).

## Mục 5.4

Trong kết quả phần trước cũng chỉ ra rằng các kênh truyền $h_{pp}, h_{ps}, h_{sp}, h_{ss}$ không chi phối vào kết quả tính $R_L$ của các bên. Nên việc sinh dữ liệu mô phỏng có thể thực hiện độc lập theo 2 bước:

- Sinh các kênh truyền $h_{pp}, h_{ps}, h_{sp}, h_{ss}$ để bài toán tối ưu có nghiệm.
  - Cứ sinh ngẫu nhiên bộ 4 giá trị này và chỉ lưu mẫu mà thỏa mãn các điều kiện ràng buộc
- Sinh các kênh truyền còn lại để đánh giá tính chất an toàn.

### Hình 5.2

Với cùng điều kiện 8 kênh truyền (thỏa mãn $G$ khác rỗng), phần này đánh giá ba bài toán **NC, SF, CP** theo $R_L^P$ như sau:

- **NC**: Khi chỉ có $PU$ truyền, cực tiểu hóa $R_L^P$
- **CP**: Khi có $PU$ và $SU$ truyền, cực tiểu hóa $R_L^P$.
- **SF**: Khi có $PU$ và $SU$ truyền, cực tiểu hóa **$R_L^S$**, lúc này $R_L^P$ được bao nhiêu thì đem ra so sánh với hai bài trên, tức là trường hợp này $R_L^P$ có thể rất tệ.

**Chú ý là ở đây không đặt các giá trị $\theta$ trong các bài toán này như trong phần phân tích**.

Kết quả cũng rất dễ đoán, **SF** do đi tối ưu (làm giảm) cho $R_L^S$ nên cho kết quả tệ hơn hai cases còn lại (tập trung tối ưu cho $R_L^P$).

==> Lợi ích giữa $PU$ và $SU$ là xung đột với nhau, $SU$ tối ưu cho mình thì hiệu năng của $PU$ sẽ giảm đi.

### Hình 5.3

Mô phỏng tương tự (cùng tập dữ liệu) nhưng đánh giá theo xác suất truyền tin (hiệu năng tin cậy) tại **$PU$**.

Ở đây, do xung đột giữa tính an toàn và tính tin cậy nên tương quan so sánh đảo chiều: $SU$ lại cho kết quả tốt nhất (càng cao càng tốt) cho xác suất truyền tin tại $PU$.

### Hình 5.4

Từ hai kết quả trên cho thấy rất khó đánh giá cái nào tốt hơn cái nào: một cái thì tệ về an toàn nhưng lại tốt về tin cậy.

Do đó để công bằng thì phần này đi so sánh khi một tiêu chí là tương đương nhau. **Cụ thể là so sánh $R_L^P$ của **NC** và **SF** trong các mẫu thử mà xác suất truyền tin $p_{tx}^P$ là sai khác nhau rất nhỏ (1%)**

Kết quả cho thấy (Hình 5.4a) đa số các trường hợp thì $R_L^P$ giữa hai cases này là tương đồng nhau (sai khác 0), nhưng có vẻ có nhiều mẫu hơn cho thấy **SF** cho kết quả tốt hơn về $R_L^P$ (nửa bên phải)

Tương tự với kết quả so sánh giữa **CP** và **NC**

### Hình 5.5

Các kết quả trên chưa cho thấy rõ lợi ích của việc hợp tác. So sánh giữa **CP** và **NC** thì khá rõ rồi, nhưng giữa **SF** (hợp tác) và **NC** (không hợp tác) thì chưa rõ.

Phần này sẽ cho thấy thêm một lợi ích nữa của việc hợp tác (mặc dù kết quả cũng không đẹp lắm :)).

Ở đây dùng cùng tập dữ liệu với các mô phỏng trong Mục 5.4 này chỉ là chia nhỏ thành 2 phần:

- Một phần bao gồm các mẫu mà $\Omega_{pe} < \Omega_{se}$ (can nhiễu từ STx tới EAVP lớn hơn tín hiệu nghe lén từ PTx tới EAVP): Tức là **điều kiện BẤT lợi** cho kẻ nghe lén EAVP
- Một phần bao gồm các mẫu mà $\Omega_{pe} >= \Omega_{se}$ (can nhiễu từ STx tới EAVP nhỏ hơn tín hiệu nghe lén từ PTx tới EAVP): Tức là **điều kiện CÓ lợi** cho kẻ nghe lén EAVP

Trong hai hình 5.5a và 5.5b tương ứng, khi chú ý tới hai đường giao nhau, kết quả có thể rút ra là việc hợp tác giúp chất lượng truyền tin an toàn ổn định hơn - mặc dù chất lượng có thể không tốt bằng **NC** nhưng số lượng mẫu mà $R_L^P$ lớn (lộ tin nhiều) (rất gần $R_s^P = 0.8$) lại ít hơn **NC**.

## Mục 5.5

Kết quả từ Mục 5.4 hơi mờ nhạt, và một nhận xét quan trọng là điều kiện kênh truyền ảnh hưởng rất lớn tới chất lượng truyền tin, việc hợp tác không thôi là chưa đủ (mặc dù có tốt hơn ở một vài khía cạnh) => Cần các xử lý tốt hơn kết hợp.

Tuy nhiên, Mục 5.5 lại cho thấy kết quả **rất rõ rệt** bằng việc khai thác sự đa dạng vị trí địa lý để khắc phục vấn đề "phụ thuộc vào điều kiện kênh truyền".

Phần này là bài toán nhiều $SU$ cạnh tranh xuất được truyền tin cùng $PU$. Và như phân tích ban đầu, các $SU$ sẽ đi tối ưu $R_L^P$ (Bài toán 4.27 đầy đủ).

Về phần sinh dữ liệu, phần này sẽ sinh dữ liệu theo 2 bước:

- Sử dụng dữ liệu sinh từ [Mục 5.4](#mục-54) (bước 1) => Được 4 kênh truyền
- Sinh dữ liệu cho 4 kênh truyền còn lại độc lập với Mục 5.4

### Hình 5.6

Bài toán 4.27 có thêm một tham số là $\theta^S$ là tốc độ lộ tin trung bình tối đa mà $SU$ chấp nhận được. Do đó trước hết phần đầu tiên là đánh giá xem mức độ ảnh hưởng của tham số này tới kết quả như thế nào.

Hình 5.6 a và b cho thấy mặc dù $\theta^S$ thay đổi rất nhiều nhưng $R_L^P$ lại không thay đổi đáng kể. Cho thấy khi đã lựa chọn tối ưu cho $PU$ rồi thì kể cả $SU$ có giảm lợi ích bên mình thì kết quả cũng không tăng đáng kể.

Chú ý kết quả này không xung đột với các kết quả trước, vì ở đây bài toán đã đi tối ưu $R_L^P$ rồi, cái "không tăng đáng kể" ở đây cho thấy rằng $R_L^P$ ngay từ đầu đã bị giới hạn bởi điều kiện kênh truyền, tham số $\theta^S$ chỉ đóng vai trò nhỏ, ít chi phối hơn (mặc dù có ảnh hưởng).

### Hình 5.7 và Hình 5.8

Phần này mô phỏng với nhiều $SU$ cạnh tranh (nhưng chỉ có 1 $SU$ được chọn và cùng truyền với $PU$).

Sau khi đánh giá $\theta^S$ ở trên thì có thể thấy có thể cố định $\theta^S$ cho các $SU$ đều là $0.5$ mà không ảnh hưởng nhiều tới kết quả.

Kết quả cho thấy, chỉ cần 8 $SU$ thôi thì $PU$ có xác suất cực cao rằng nó có thể truyền tin với tốc độ lộ tin gần như bằng 0 (Hình 5.7a) và thậm chí cũng không đánh đổi bằng xác suất truyền tin (Hình 5.8a)

Về phía **$SU$** được chọn, hiệu năng không khác biệt quá lớn.

# Giải thích mã nguồn

Để chạy, cần tải Python. Sau đó tải các thư viện như dưới đây:

```cmd
pip install -r requirements.txt
```

Sau đó chạy lệnh sau: Chú ý thay `***` bằng tên tệp cần chạy (VD: `feasibility`)

```cmd
python src\sims_***.py
```

## Mục 5.3

Tệp [src\sims_feasibility.py](src\sims_feasibility.py) để sinh dữ liệu cho mục 5.3

Các tham số khi chạy chương trình

- `Problem?` => Nhập 2
- `Number of Samples` => Nhập 50,000
  - Thực tế chạy 50,000 mẫu rất lâu (mỗi tổ hợp ($\rho^P$, $\rho^S$) trong báo cáo là 50,000 mẫu) và rất rủi ro nếu dừng giữa chừng nên có thể thử với số mẫu nhỏ hơn, sau đó nối các kết quả (CSV) lại.

Kết quả sẽ được lưu vào thư mục `simulation\feasibility\rho-<timestamp>\result-<timestamp>.csv`

Kết quả này có thể truyền vào [src\draw_feasibility.ipynb](src\draw_feasibility.ipynb) để vẽ hình 5.1.

## Mục 5.4

Tệp [src\sims_generate.py](src\sims_generate.py) để sinh dữ liệu cho mục 5.4

Các tham số khi chạy chương trình

- `Problem?` => Chạy nhiều lần chạy, theo thứ tự 1, 2, 3, 4
- `Prefix?` => Có thể bỏ qua (Enter)
- Khi chạy Problem 2 (Non Coop), cần chạy cho cả hai `Side?`: `P` (cho $PU$) và `S` (cho $SU$)
- Kết quả của Problem thứ $n+1$ sẽ cần (các) tệp kết quả của Problem thứ $n$
- Chạy Problem 1 sẽ yêu cầu nhập số lượng mẫu. Trong báo cáo dùng 200,000 mẫu.

- Problem 1 sẽ sinh dữ liệu cho 4 kênh **PP, PS, SP và SS** đảm bảo tập $G$ không rỗng, trả về nghiệm của bài toán ở Bổ đề 5.
  - Kết quả được lưu vào đường dẫn `simulation\generate\fea-<timestamp>\result-<timestamp>.csv`
- Problem 2 sẽ sinh dữ liệu cho kênh **PE** (với `Side? P`) và kênh **SF** (với `Side? S`), trả về nghiệm của bài toán **NC** mô tả trong [Mục 5.4 Hình 5.2](#hình-52)
  - Kết quả được lưu vào đường dẫn `simulation\generate\ncp-<timestamp>\result-<timestamp>.csv` và `simulation\generate\ncs-<timestamp>\result-<timestamp>.csv`
- Problem 3 sẽ sinh dữ liệu cho kênh **PF** và **SE** và trả về nghiệm của bài toán **SF** mô tả trong [Mục 5.4 Hình 5.2](#hình-52)
  - Kết quả được lưu vào đường dẫn `simulation\generate\sf2-<timestamp>\result-<timestamp>.csv`
- Problem 4 sẽ dùng dữ liệu từ các Problem trước và trả về nghiệm của bài toán **CP** mô tả trong [Mục 5.4 Hình 5.2](#hình-52)
  - Kết quả được lưu vào đường dẫn `simulation\generate\cp2-<timestamp>\result-<timestamp>.csv`

Kết quả sau khi chạy Problem 4 có thể truyền vào các tệp `src\draw_main_*.ipynb` để vẽ hình tương ứng:

- [src\draw_main_general.ipynb](src\draw_main_general.ipynb): Cho hình 5.2 và 5.3
- [src\draw_main_sameptx.ipynb](src\draw_main_sameptx.ipynb): Cho hình 5.4
- [src\draw_main_channel.ipynb](src\draw_main_channel.ipynb): Cho hình 5.5

## Mục 5.5

Tệp [src\sims_competitive.py](src\sims_competitive.py) để sinh dữ liệu cho mục 5.5

Các tham số khi chạy chương trình

- `Problem?` => Nhập 1
- `Feasibility file:` => Nhập đường dẫn tới tệp chạy **Problem 1** của mục 5.4
- `Limit: `: Có thể bỏ qua (Enter). Chỉ lấy phần đầu của tập mẫu
- `Index?`: Có thể bỏ qua (Enter). Chỉ chạy với giá trị ThetaS xác định

Khi chạy sẽ sinh thêm 4 kênh truyền còn lại: **PE, SE, PF và SF** và trả về nghiệm của Bài toán 4.27 đầy đủ.

Kết quả sẽ được lưu vào thư mục `simulation\competitive\thetas<ThetaS>-<timestamp>\result-<timestamp>.csv`

Kết quả này có thể truyền vào:

- [src\draw_thetas.ipynb](src\draw_thetas.ipynb) để vẽ hình 5.6
- [src\draw_multiuser.ipynb](src\draw_multiuser.ipynb) để vẽ hình 5.7 và 5.8
