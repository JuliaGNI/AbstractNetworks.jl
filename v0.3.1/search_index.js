var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = AbstractNeuralNetworks","category":"page"},{"location":"#AbstractNeuralNetworks","page":"Home","title":"AbstractNeuralNetworks","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for AbstractNeuralNetworks.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [AbstractNeuralNetworks]","category":"page"},{"location":"#AbstractNeuralNetworks.AbstractCell","page":"Home","title":"AbstractNeuralNetworks.AbstractCell","text":"AbstractCell\n\nAn AbstractCell is a map from mathbbR^MmathbbR^N rightarrow mathbbR^OmathbbR^P.\n\nConcrete cell types should implement the following functions:\n\ninitialparameters(backend::Backend, ::Type{T}, cell::AbstractCell; init::Initializer = default_initializer(), rng::AbstractRNG = Random.default_rng())\nupdate!(::AbstractLayer, θ::NamedTuple, dθ::NamedTuple, η::AbstractFloat)\n\nand the functors\n\ncell(x, st, ps)\ncell(z, y, x, st, ps)\n\n\n\n\n\n","category":"type"},{"location":"#AbstractNeuralNetworks.AbstractExplicitCell","page":"Home","title":"AbstractNeuralNetworks.AbstractExplicitCell","text":"AbstractExplicitCell\n\nAbstract supertype for explicit cells. This type exists mainly for compatibility with Lux.\n\n\n\n\n\n","category":"type"},{"location":"#AbstractNeuralNetworks.AbstractExplicitLayer","page":"Home","title":"AbstractNeuralNetworks.AbstractExplicitLayer","text":"AbstractExplicitLayer\n\nAbstract supertype for explicit layers. This type exists mainly for compatibility with Lux.\n\n\n\n\n\n","category":"type"},{"location":"#AbstractNeuralNetworks.AbstractLayer","page":"Home","title":"AbstractNeuralNetworks.AbstractLayer","text":"AbstractLayer\n\nAn AbstractLayer is a map from mathbbR^M rightarrow mathbbR^N.\n\nConcrete layer types should implement the following functions:\n\ninitialparameters(backend::Backend, ::Type{T}, layer::AbstractLayer; init::Initializer = default_initializer(), rng::AbstractRNG = Random.default_rng())\nupdate!(::AbstractLayer, θ::NamedTuple, dθ::NamedTuple, η::AbstractFloat)\n\nand the functors\n\nlayer(x, ps)\nlayer(y, x, ps)\n\n\n\n\n\n","category":"type"},{"location":"#AbstractNeuralNetworks.Chain","page":"Home","title":"AbstractNeuralNetworks.Chain","text":"Chain\n\nA chain is a sequence of layers.\n\nA Chain can be initialized by passing an arbitrary number of layers\n\nChain(layers...)\n\nor a neural network architecture together with a backend and a parameter type:\n\nChain(::Architecture, ::Backend, ::Type; kwargs...)\nChain(::Architecture, ::Type; kwargs...)\n\nIf the backend is omitted, the default backend CPU() is chosen. The keyword arguments will be passed to the initialparameters method of each layer.\n\n\n\n\n\n","category":"type"},{"location":"#AbstractNeuralNetworks.Model","page":"Home","title":"AbstractNeuralNetworks.Model","text":"A supertype for Chain, AbstractCell etc.\n\n\n\n\n\n","category":"type"},{"location":"#AbstractNeuralNetworks.NeuralNetworkParameters","page":"Home","title":"AbstractNeuralNetworks.NeuralNetworkParameters","text":"NeuralNetworkParameters\n\nThis struct stores the parameters of a neural network. In essence, it is just a wrapper around a NamedTuple of NamedTuple that provides some context, e.g., for storing parameters to file.\n\n\n\n\n\n","category":"type"},{"location":"#AbstractNeuralNetworks.apply!-Tuple{AbstractArray, AbstractArray, AbstractNeuralNetworks.AbstractLayer, Any, Any}","page":"Home","title":"AbstractNeuralNetworks.apply!","text":"apply!(y, cell::AbstractCell, x, ps)\n\nSimply calls cell(y, x, ps)\n\n\n\n\n\n","category":"method"},{"location":"#AbstractNeuralNetworks.apply!-Tuple{AbstractArray, AbstractNeuralNetworks.AbstractLayer, Any, Any}","page":"Home","title":"AbstractNeuralNetworks.apply!","text":"apply!(y, layer::AbstractLayer, x, ps)\n\nSimply calls layer(y, x, ps)\n\n\n\n\n\n","category":"method"},{"location":"#AbstractNeuralNetworks.apply-Tuple{AbstractNeuralNetworks.AbstractCell, Any, Any, Any}","page":"Home","title":"AbstractNeuralNetworks.apply","text":"apply(cayer::AbstractCell, x, ps)\n\nSimply calls cell(x, st, ps)\n\n\n\n\n\n","category":"method"},{"location":"#AbstractNeuralNetworks.apply-Tuple{AbstractNeuralNetworks.AbstractLayer, Any, Any}","page":"Home","title":"AbstractNeuralNetworks.apply","text":"apply(layer::AbstractLayer, x, ps)\n\nSimply calls layer(x, ps)\n\n\n\n\n\n","category":"method"},{"location":"#AbstractNeuralNetworks.initialparameters","page":"Home","title":"AbstractNeuralNetworks.initialparameters","text":"initialparameters\n\nReturns the initial parameters of a model, i.e., a layer or chain.\n\ninitialparameters(backend::Backend, ::Type{T}, model::Model; init::Initializer = default_initializer(), rng::AbstractRNG = Random.default_rng())\ninitialparameters(::Type{T}, model::Model; init::Initializer = default_initializer(), rng::AbstractRNG = Random.default_rng())\n\nThe init! function must have the following signature:\n\ninit!(rng::AbstractRNG, x::AbstractArray)\n\nThe default_initializer() returns randn!.\n\n\n\n\n\n","category":"function"}]
}