
public class Product {
	int productId;
	String productName,category;
	
	public Product(int productId,String productName,String category) {
		this.productId=productId;
		this.productName=productName;
		this.category=category;
	}
	public String toString() {
		return "["+productId+", "+productName+", "+category+"]";
	}
	
	public static Product linearSearch(Product[] products,int targetId) {
		for(Product i:products) {
			if(i.productId==targetId) {
				return i;
			}
		}
		return null;
	}
	
	public static Product binarySearch(Product[] products,int targetId) {
		int low=0,high=products.length-1;
		while(low<=high) {
			int mid=(low+high)/2;
			if(products[mid].productId==targetId) {
				return products[mid];
			}
			else if(products[mid].productId<targetId) {
				low=mid+1;
			}
			else {
				high=mid-1;
			}
		}
		return null;
	}
	
	public static void sortProducts(Product[] products) {
		for(int i=0;i<products.length-1;i++) {
			for(int j=0;j<products.length-i-1;j++) {
				if(products[j].productId>products[j+1].productId) {
					Product temp=products[j];
					products[j]=products[j+1];
					products[j+1]=temp;
				}
			}
		}
	}
	public static void main(String[] args) {
		
		Product[] products= {
				new Product(100,"shirts","clothing"),
				new Product(101,"mobile","electornics"),
				new Product(102,"laptop","electronics"),
				new Product(103,"shoes","footware"),
				
		};
		
		System.out.println("Linear Search: ");
		Product res1=linearSearch(products,104);
		if(res1==null) {
			System.out.println("product not found");
		}
		else {
			System.out.println(res1);
		}
		
		sortProducts(products);
		System.out.println("Binary Search: ");
		Product res2=binarySearch(products,102);
		if(res2==null) {
		System.out.println("product not found");
		}
		else {
			System.out.println(res2);
		}
		
	}
}
