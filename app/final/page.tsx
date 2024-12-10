export default function Page() {
  return (
    <>
      <h1 className="text-3xl ml-5 text-yellow-400">Coffee Shop Order Form</h1>
      <form className="p-6 bg-gray-800 rounded-lg shadow-md">

        
        <label htmlFor="product" className="ml-5 text-yellow-400">Coffee Name</label>
        <input 
          type="text" 
          name="product" 
          id="product" 
          className="m-5 text-yellow-400 bg-gray-700 border-2 border-gray-600 rounded-lg p-2"
          placeholder="e.g., Latte, Espresso, Cappuccino"
        />
        <br />

        
        <label htmlFor="coffee" className="mx-5 text-yellow-400">Choose Your Coffee:</label>
        <select name="coffee" id="coffee" className="m-5 text-yellow-400 bg-gray-700 border-2 border-gray-600 rounded-lg p-2">
          <option value="latte">Latte</option>
          <option value="cappuccino">Cappuccino</option>
          <option value="espresso">Espresso</option>
          <option value="americano">Americano</option>
        </select>

        <br />

        
        <div className="ml-5 mt-5">
  <label className="text-yellow-400">Size:</label><br />
  <label htmlFor="small" className="inline-block mr-4 text-yellow-400 cursor-pointer bg-gray-700 rounded-lg py-2 px-4 hover:bg-gray-600">
    <input type="radio" id="small" name="size" value="small" className="mr-2" />
    Small
  </label>
  <label htmlFor="medium" className="inline-block mr-4 text-yellow-400 cursor-pointer bg-gray-700 rounded-lg py-2 px-4 hover:bg-gray-600">
    <input type="radio" id="medium" name="size" value="medium" className="mr-2" />
    Medium
  </label>
  <label htmlFor="large" className="inline-block text-yellow-400 cursor-pointer bg-gray-700 rounded-lg py-2 px-4 hover:bg-gray-600">
    <input type="radio" id="large" name="size" value="large" className="mr-2" />
    Large
  </label>
</div>


        
        <div className="ml-5 mt-5 text-yellow-400">
          <input type="checkbox" id="milk" name="milk" value="milk" />
          <label htmlFor="milk"> Milk</label><br />
          <input type="checkbox" id="syrup" name="syrup" value="syrup" />
          <label htmlFor="syrup"> Syrup</label><br />
          <input type="checkbox" id="whipped_cream" name="whipped_cream" value="whipped_cream" />
          <label htmlFor="whipped_cream"> Whipped Cream</label>
        </div>

        <br />

       
        <button 
          className="ml-10 focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:focus:ring-yellow-700"
          type="submit"
        >
          Place Order
        </button>
      </form>
    </>
  );
}
