# Tối ưu

## Multiobjective Optimization - Principle Case Studies

- Hai dạng tối ưu phức tạp: Multiobjective Optimization và Hard Optimization
- Hard Optimization:
  - Combinatorial: Những bài toán NP-hard
    - Có một số thuật toán heuristic hiệu quả, nhưng chỉ dùng được trong những bài toán nhất định
  - Continuous: Những bài toán chưa có thuật toán hiệu quả
    - Có một số thuật toán hiệu quả nhưng phải là tối ưu lồi
- **Metaheuristic**: Nguồn gốc ra đời để giải quyết Combinatorial, nhưng có thể cấu hình để phù hợp với Continuous
  - VD: Simulated annealing method, genetic algorithm, tabu search, ant colony
  - Đặc điểm:
    - Là các thuật toán ngẫu nhiên, hoặc ngẫu nhiên một phần
    - Nguồn gốc là từ tối ưu tổ hợp => Không đòi hỏi đạo hàm và hàm mục tiêu là khả vi
    - Lấy cảm hứng từ tự nhiên: vật lý, sinh học,...
    - Có thể sử dụng để hướng dẫn cho một bộ tìm kiếm khác, chuyên môn hơn
    - Khó khăn trong việc lựa chọn tham số và thời gian tính toán
  - Tính hiệu quả:
    - Ý tưởng cơ bản trong các thuật toán truyền thống là cải thiện dựa trên lặp: lựa chọn ngẫu nhiên một giá trị khởi tạo cho biến tối ưu, sau đó thực hiện thay đổi giá trị đó và so sánh giá trị hàm mục tiêu tương ứng với chúng, nếu sự thay đổi này giúp giảm giá trị hàm mục tiêu thì giá trị thay đổi sẽ là giá trị mới cho biến tối ưu, ngược lại sẽ thử với một giá trị khác.
    - Tuy nhiên chiến lược này dễ khiến kết quả bị bẫy tại các điểm tối ưu cục bộ
    - Để vượt qua các điểm tối ưu cục bộ này, có hai hướng mà các thuật toán metaheuristic giải quyết
      - SA và Tabu: Một dạng metaheuristic hàng xóm, chấp nhận một sự thay đổi ngay cả khi nó làm hàm mục tiêu tệ hơn. Các bộ kiểm soát suy giảm (degradation control mechanism) sẽ giúp tránh vấn đề phân tán kết quả.
      - Gen: Một dạng metaheuristic phân tán, cho phép kiểm soát các giá trị bị thay đổi dựa trên cơ chế chọn lọc trong một tập các lời giải đã thử.
- **MOOP**:
  - Tại sao cần sinh các lời giải để giá trị các hàm mục tiêu phân bố đều trên biên Pareto?
    - Khi DM đưa ra lựa chọn, việc kiểm tra một lời giải khác sẽ khiến giá trị các hàm mục tiêu bị thay đổi đáng kể
  - Tại sao phương pháp Weight-sum không thể tìm được các nghiệm ứng với các điểm lõm trên biên Pareto?
    - Hàm mục tiêu tổng hợp là tổ hợp tuyến tính có thể coi như một họ các đường thẳng song song với nhau trên không gian mục tiêu
    - Để tìm được nghiệm tương ứng với một điểm trên biên Pareto thì cần tìm đường thẳng tiếp xúc với tập các giá trị hợp lệ của hàm mục tiêu tại điểm đó
    - Vì bài toán tối ưu tổng hợp là đi cực tiểu hóa tổng trọng số, tức là tìm đường thẳng tiếp xúc mà gần với O nhất
    - Với điểm lõm thì đường thẳng tiếp xúc này bao giờ cũng chia tập các giá trị hợp lệ của hàm mục tiêu thành 2 nửa. Và như vậy luôn có một nửa gần với O hơn
    - Như vậy, luôn có đường gần O hơn mà tiếp xúc với tập các giá trị hợp lệ của hàm mục tiêu, và điểm tiếp xúc không thể là một điểm lõm.
